"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactForm({
  email = "paulosergiofragamarcos@gmail.com",
}: {
  email?: string;
}) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [opening, setOpening] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${t.contact.form.subject} — ${formData.nome}`;
    const body = `${formData.mensagem}\n\n— ${formData.nome} (${formData.email})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setOpening(true);
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
        className="w-full rounded-xl bg-accent px-4 py-3 font-medium text-accent-fg transition hover:opacity-90"
      >
        {t.contact.form.send}
      </button>
      {opening && (
        <p className="text-center text-sm text-accent">
          {t.contact.form.opening}
        </p>
      )}
    </form>
  );
}
