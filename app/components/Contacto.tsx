"use client";

import { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaMapMarkerAlt, FaLaptop, FaClock } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", motivo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const tagStyle = { backgroundColor: "#A8C5B5", color: "white", padding: "4px 14px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, display: "inline-block", marginBottom: "1rem" };
  const inputStyle = { width: "100%", padding: "12px 16px", borderRadius: "12px", border: "2px solid #e5e7eb", fontSize: "0.95rem", color: "#2C2C2C", backgroundColor: "white", outline: "none", boxSizing: "border-box" as const };
  const labelStyle = { color: "#2C2C2C", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.4rem", display: "block" };

  const motivos = [
    "Ansiedad o estrés",
    "Depresión",
    "Terapia de pareja",
    "Evaluación psicológica",
    "Atención infantil o adolescente",
    "Otro",
  ];

  const infoItems = [
    { icon: <FaWhatsapp size={20} color="#25D366" />, titulo: "WhatsApp", valor: "+57 305 337 2724", link: "https://wa.me/573053372724" },
    { icon: <SiGmail size={20} color="#EA4335" />, titulo: "Gmail", valor: "Psico.sergiodiaz@gmail.com", link: "mailto:Psico.sergiodiaz@gmail.com" },
    { icon: <FaMapMarkerAlt size={20} color="#7BA7A0" />, titulo: "Ubicación", valor: "Medellín, Colombia", link: null },
    { icon: <FaLaptop size={20} color="#7BA7A0" />, titulo: "Modalidad", valor: "Presencial y Virtual", link: null },
    { icon: <FaClock size={20} color="#7BA7A0" />, titulo: "Disponibilidad", valor: "20+ horas semanales", link: null },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="contacto" style={{ backgroundColor: "#F5F0E8", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        <div style={{ textAlign: "center" as const, marginBottom: "4rem" }}>
          <span style={tagStyle}>Contacto</span>
          <h2 style={{ color: "#2C2C2C", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
            Da el primer <span style={{ color: "#7BA7A0" }}>paso</span>
          </h2>
          <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto" }}>
            Agenda tu primera sesión o resuelve tus dudas. Estoy aquí para acompañarte.
          </p>
        </div>

        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" as const, alignItems: "flex-start" }}>

          {/* Info izquierda */}
          <div style={{ flex: "0 0 300px", minWidth: "260px" }}>
            <div style={{ backgroundColor: "#7BA7A0", borderRadius: "20px", padding: "2rem", marginBottom: "1.5rem" }}>
              <p style={{ color: "white", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.5rem 0" }}>Primera sesión</p>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                La primera consulta es un espacio de conocimiento mutuo donde evaluamos tus necesidades y diseñamos juntos el proceso terapéutico.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
              {infoItems.map((item) => {
                return (
                  <div key={item.titulo} style={{ display: "flex", alignItems: "center", gap: "1rem", backgroundColor: "white", borderRadius: "14px", padding: "1rem" }}>
                    <span style={{ flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <p style={{ color: "#6B6B6B", fontSize: "0.75rem", margin: "0 0 0.1rem 0" }}>{item.titulo}</p>
                      {item.link ? (
                        <a href={item.link} style={{ color: "#2C2C2C", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>{item.valor}</a>
                      ) : (
                        <p style={{ color: "#2C2C2C", fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>{item.valor}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Formulario derecha */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            {enviado ? (
              <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "3rem", textAlign: "center" as const, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>💚</p>
                <h3 style={{ color: "#7BA7A0", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem" }}>¡Mensaje enviado!</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  Gracias por contactarme. Me pondré en contacto contigo muy pronto para coordinar tu primera sesión.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ backgroundColor: "white", borderRadius: "20px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Nombre</label>
                    <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Teléfono</label>
                    <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Tu teléfono" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Correo electrónico</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" required style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Motivo de consulta</label>
                  <select name="motivo" value={form.motivo} onChange={handleChange} required style={inputStyle}>
                    <option value="">Selecciona un motivo</option>
                    {motivos.map((m) => {
                      return <option key={m} value={m}>{m}</option>;
                    })}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Mensaje</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Cuéntame brevemente cómo te puedo ayudar..." rows={4} style={{ ...inputStyle, resize: "vertical" as const }} />
                </div>

                <button type="submit" style={{ backgroundColor: "#D4866A", color: "white", padding: "14px 32px", borderRadius: "9999px", border: "none", fontSize: "1rem", fontWeight: 600, cursor: "pointer", width: "100%" }}>
                  Enviar mensaje
                </button>

                <p style={{ color: "#6B6B6B", fontSize: "0.8rem", textAlign: "center" as const, margin: 0 }}>
                  También puedes escribirme directamente por{" "}
                  <a href="https://wa.me/573053372724" style={{ color: "#25D366", fontWeight: 600 }}>WhatsApp</a>
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}