"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const api = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${api}api/newsletters`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    console.log(res);
    if (res.ok) {
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", mensagem: "" });
    } else {
      setStatus("Erro ao enviar a mensagem.");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-4 p-6 bg-gray-800/50 dark:bg-gray-200/50 rounded-lg shadow-lg"
    >
      <input
        type="text"
        placeholder="Nome"
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        className="w-full p-3 bg-gray-700 dark:bg-gray-300 rounded-md text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-3 bg-gray-700 dark:bg-gray-300 rounded-md text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        placeholder="Mensagem"
        value={formData.mensagem}
        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
        className="w-full p-3 bg-gray-700 dark:bg-gray-300 rounded-md text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={5}
        required
      />
      <button
        type="submit"
        className="w-full p-3 bg-blue-600 dark:bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
      >
        Enviar
      </button>
      {status && (
        <p
          className={`text-center ${
            status.includes("sucesso")
              ? "text-green-400 dark:text-green-600"
              : "text-red-400 dark:text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </motion.form>
  );
}
