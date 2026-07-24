from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email (Emergent-managed Resend proxy)
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "PT. Prima Agro Tech")
COMPANY_INBOX = os.environ.get("COMPANY_INBOX", "secretary@primaagrotech.com")

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# ---------------- Models ----------------
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str
    source: Optional[str] = "contact"  # contact | product | solutions
    product: Optional[str] = None


class Contact(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class TestimonialCreate(BaseModel):
    name: str
    role: Optional[str] = None       # farmer | dealer | plantation
    crop: Optional[str] = None
    province: Optional[str] = None
    product: Optional[str] = None
    email: Optional[EmailStr] = None
    quote: str


class Testimonial(TestimonialCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    approved: bool = False
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ---------------- Email helper ----------------
async def send_email(subject: str, html: str, reply_to: Optional[str] = None) -> bool:
    if not EMAIL_KEY:
        logger.warning("EMERGENT_EMAIL_KEY not set; skipping email send")
        return False
    payload = {
        "to": [COMPANY_INBOX],
        "subject": subject,
        "html": html,
        "from_name": EMAIL_FROM_NAME,
    }
    if reply_to:
        payload["contact_email"] = reply_to
    try:
        async with httpx.AsyncClient(timeout=30) as c:
            resp = await c.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return True
    except Exception as e:
        logger.error(f"Email send error: {e}")
        return False


def _row(label, value):
    if not value:
        return ""
    return (f"<tr><td style='padding:6px 12px;color:#5C5C5C;font-family:Arial;font-size:14px'>{label}</td>"
            f"<td style='padding:6px 12px;color:#1A1A1A;font-family:Arial;font-size:14px'><strong>{value}</strong></td></tr>")


# ---------------- Routes ----------------
@api_router.get("/")
async def root():
    return {"message": "PT. Prima Agro Tech API"}


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    obj = Contact(**payload.model_dump())
    await db.contacts.insert_one(obj.model_dump())
    subject = f"New enquiry from {obj.name}"
    if obj.source == "product" and obj.product:
        subject = f"Product enquiry: {obj.product} — {obj.name}"
    html = f"""
    <div style='background:#F7F6F2;padding:24px'>
      <div style='max-width:560px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #eee'>
        <div style='background:#1C3A1F;padding:20px 24px'>
          <h2 style='color:#fff;font-family:Arial;margin:0'>New Website Enquiry</h2>
          <p style='color:#43B14B;font-family:Arial;margin:4px 0 0;font-size:13px'>PT. Prima Agro Tech</p>
        </div>
        <table style='width:100%;border-collapse:collapse;padding:16px'>
          {_row('Name', obj.name)}
          {_row('Email', obj.email)}
          {_row('Company', obj.company)}
          {_row('Phone', obj.phone)}
          {_row('Product', obj.product)}
          {_row('Source', obj.source)}
        </table>
        <div style='padding:0 24px 24px'>
          <p style='color:#5C5C5C;font-family:Arial;font-size:14px;margin-bottom:6px'>Message</p>
          <p style='color:#1A1A1A;font-family:Arial;font-size:15px;line-height:1.6'>{obj.message}</p>
        </div>
      </div>
    </div>"""
    emailed = await send_email(subject, html, reply_to=obj.email)
    logger.info(f"Contact stored (emailed={emailed})")
    return obj


@api_router.post("/testimonials", response_model=Testimonial)
async def create_testimonial(payload: TestimonialCreate):
    obj = Testimonial(**payload.model_dump())
    await db.testimonials.insert_one(obj.model_dump())
    html = f"""
    <div style='background:#F7F6F2;padding:24px'>
      <div style='max-width:560px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #eee'>
        <div style='background:#1C3A1F;padding:20px 24px'>
          <h2 style='color:#fff;font-family:Arial;margin:0'>New Testimonial Submitted</h2>
        </div>
        <table style='width:100%;border-collapse:collapse'>
          {_row('Name', obj.name)}
          {_row('Role', obj.role)}
          {_row('Crop', obj.crop)}
          {_row('Province', obj.province)}
          {_row('Product', obj.product)}
        </table>
        <div style='padding:16px 24px 24px'>
          <p style='color:#1A1A1A;font-family:Arial;font-size:15px;line-height:1.6;font-style:italic'>"{obj.quote}"</p>
        </div>
      </div>
    </div>"""
    emailed = await send_email(f"New testimonial from {obj.name}", html, reply_to=obj.email)
    logger.info(f"Testimonial stored (emailed={emailed})")
    return obj


@api_router.get("/testimonials", response_model=List[Testimonial])
async def list_testimonials(approved_only: bool = False):
    query = {"approved": True} if approved_only else {}
    docs = await db.testimonials.find(query, {"_id": 0}).sort("created_at", -1).to_list(200)
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
