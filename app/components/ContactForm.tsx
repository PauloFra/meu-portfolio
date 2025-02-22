"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus("Mensagem enviada!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Erro ao enviar.");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-4"
    >
      <input
        type="text"
        placeholder="Nome"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-3 bg-gray-700 rounded-md text-white"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-3 bg-gray-700 rounded-md text-white"
        required
      />
      <textarea
        placeholder="Mensagem"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-3 bg-gray-700 rounded-md text-white"
        rows={5}
        required
      />
      <button type="submit" className="w-full p-3 bg-blue-600 rounded-md">
        Enviar
      </button>
      {status && <p className="text-center">{status}</p>}
    </motion.form>
  );
}
