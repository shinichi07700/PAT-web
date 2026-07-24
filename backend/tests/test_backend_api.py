"""Backend API tests for PT. Prima Agro Tech."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://prima-agro-rebuild.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def s():
    sess = requests.Session()
    sess.headers.update({"Content-Type": "application/json"})
    return sess


def test_root(s):
    r = s.get(f"{API}/")
    assert r.status_code == 200
    assert "Prima Agro Tech" in r.json().get("message", "")


# ---- Contact ----
def test_contact_create(s):
    payload = {
        "name": "TEST_John",
        "email": "test_john@example.com",
        "message": "Hello, we would like a demo.",
        "source": "contact",
    }
    r = s.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and data["id"]
    assert "created_at" in data and data["created_at"]
    assert data["name"] == "TEST_John"
    assert data["email"] == "test_john@example.com"


def test_contact_product_source(s):
    payload = {
        "name": "TEST_Product",
        "email": "test_prod@example.com",
        "message": "Interested in Biotracol",
        "source": "product",
        "product": "biotracol",
    }
    r = s.post(f"{API}/contact", json=payload)
    assert r.status_code == 200
    assert r.json()["product"] == "biotracol"


def test_contact_invalid_email(s):
    r = s.post(f"{API}/contact", json={"name": "x", "email": "not-an-email", "message": "hi"})
    assert r.status_code == 422


# ---- Testimonials ----
def test_testimonial_create(s):
    payload = {
        "name": "TEST_Farmer",
        "role": "farmer",
        "crop": "Rice",
        "province": "West Java",
        "product": "biotracol",
        "quote": "Great product for our paddy fields.",
    }
    r = s.post(f"{API}/testimonials", json=payload)
    assert r.status_code == 200, r.text
    d = r.json()
    assert d["approved"] is False
    assert "id" in d and d["id"]
    assert d["quote"] == payload["quote"]


def test_testimonials_list_all(s):
    r = s.get(f"{API}/testimonials")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    # Should include one we just inserted
    assert any(t.get("name") == "TEST_Farmer" for t in data)


def test_testimonials_list_approved_only(s):
    r = s.get(f"{API}/testimonials", params={"approved_only": "true"})
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    # All items must be approved
    for t in data:
        assert t.get("approved") is True
