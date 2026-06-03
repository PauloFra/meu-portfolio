"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [sent, setSent] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const api = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${api}api/newsletters`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSent(res.ok);
      if (res.ok) setFormData({ nome: "", email: "", mensagem: "" });
    } catch {
      setSent(false);
    } finally {
      setLoading(false);
    }
  };

  const field =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg placeholder-muted/70 transition-colors focus:border-accent focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-line bg-surface p-6"
    >
      <input
        type="text"
        placeholder={t.contact.form.name}
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        className={field}
        required
      />
      <input
        type="email"
        placeholder={t.contact.form.email}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={field}
        required
      />
      <textarea
        placeholder={t.contact.form.message}
        value={formData.mensagem}
        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
        className={`${field} resize-none`}
        rows={5}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-accent px-4 py-3 font-medium text-accent-fg transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? t.contact.form.sending : t.contact.form.send}
      </button>
      {sent !== null && (
        <p
          className={`text-center text-sm ${
            sent ? "text-accent" : "text-red-400"
          }`}
        >
          {sent ? t.contact.form.success : t.contact.form.error}
        </p>
      )}
    </form>
  );
}
