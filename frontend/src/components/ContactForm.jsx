import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useLang } from "../lib/i18n";

const API = process.env.REACT_APP_BACKEND_URL + "/api";

export default function ContactForm({ source = "contact", product = null, compact = false }) {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, { ...form, source, product });
      toast.success(t("contact.success"));
      setForm({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (err) {
      toast.error(t("contact.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-5" data-testid="contact-form">
      <div className={compact ? "space-y-5" : "grid md:grid-cols-2 gap-5"}>
        <div>
          <label className="label-pat">{t("contact.name")}</label>
          <input required value={form.name} onChange={update("name")} className="input-pat" data-testid="contact-name" />
        </div>
        <div>
          <label className="label-pat">{t("contact.email")}</label>
          <input required type="email" value={form.email} onChange={update("email")} className="input-pat" data-testid="contact-email" />
        </div>
        <div>
          <label className="label-pat">{t("contact.company")}</label>
          <input value={form.company} onChange={update("company")} className="input-pat" data-testid="contact-company" />
        </div>
        <div>
          <label className="label-pat">{t("contact.phone")}</label>
          <input value={form.phone} onChange={update("phone")} className="input-pat" data-testid="contact-phone" />
        </div>
      </div>
      <div>
        <label className="label-pat">{t("contact.message")}</label>
        <textarea required rows={5} value={form.message} onChange={update("message")} className="input-pat resize-none" data-testid="contact-message" />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full md:w-auto disabled:opacity-60" data-testid="contact-submit">
        {loading ? t("contact.sending") : t("contact.send")}
      </button>
    </form>
  );
}
