"use client";

import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mi", href: "#sobre-mi" },
    { label: "Servicios", href: "#servicios" },
    { label: "Temas de Interes", href: "#temas" },
    { label: "Contacto", href: "#contacto" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    backgroundColor: "#F5F0E8",
    borderBottom: "2px solid #7BA7A0",
    boxShadow: scrolled ? "0 2px 20px rgba(123,167,160,0.2)" : "none",
    transition: "box-shadow 0.3s ease",
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  };

  const linkStyle = {
    color: "#2C2C2C",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
  };

  const btnStyle = {
    backgroundColor: "#D4866A",
    color: "white",
    padding: "8px 20px",
    borderRadius: "9999px",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 600,
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <Heart size={20} color="#D4866A" fill="#D4866A" />
          <span style={{ color: "#7BA7A0", fontWeight: "bold", fontSize: "1.1rem", letterSpacing: "0.15em" }}>
            PSICOCHECHO
          </span>
        </a>

        <div className="hidden md:flex" style={{ gap: "2rem" }}>
          {links.map((item) => {
            return (
              <a key={item.href} href={item.href} style={linkStyle}>
                {item.label}
              </a>
            );
          })}
        </div>

        <a href="#contacto" className="hidden md:block" style={btnStyle}>
          Agendar cita
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "#7BA7A0" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor: "#F5F0E8", padding: "0 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", borderTop: "1px solid #e5e7eb" }}>
          {links.map((item) => {
            return (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} style={{ color: "#2C2C2C", textDecoration: "none", fontSize: "0.9rem", padding: "0.6rem 0", borderBottom: "1px solid #e5e7eb" }}>
                {item.label}
              </a>
            );
          })}
          <a href="#contacto" onClick={() => setOpen(false)} style={{ backgroundColor: "#D4866A", color: "white", padding: "12px 20px", borderRadius: "9999px", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, textAlign: "center", marginTop: "0.5rem" }}>
            Agendar cita
          </a>
        </div>
      )}
    </nav>
  );
}