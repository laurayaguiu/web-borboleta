"use client"; // importante para usar eventos no lado do cliente

import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // impede o reload da página
    alert("Formulário enviado com sucesso!");
    setNome("");
    setEmail("");
  };

  return (
    <form id="form-card" onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-pink-500 text-white p-2 rounded">
        Enviar
      </button>
    </form>
  );
}