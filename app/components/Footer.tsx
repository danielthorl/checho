import { Heart } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Servicios", href: "#servicios" },
    { label: "Temas de Interés", href: "#temas" },
    { label: "Contacto", href: "#contacto" },
  ];

  const contactItems = [
    { icon: <FaWhatsapp size={16} color="#25D366" />, valor: "+57 305 337 2724", link: "https://wa.me/573053372724" },
    { icon: <SiGmail size={16} color="#EA4335" />, valor: "sergiostevendiazpulido01@gmail.com", link: "mailto:sergiostevendiazpulido01@gmail.com" },
    { icon: <FaMapMarkerAlt size={16} color="#7BA7A0" />, valor: "Medellín, Colombia", link: null },
    { icon: <FaLinkedin size={16} color="#0A66C2" />, valor: "LinkedIn", link: "https://linkedin.com/in/sergio-steven-diaz-pulido" },
  ];

  return (
    <footer style={{ backgroundColor: "#2C2C2C", padding: "3rem 1.5rem 1.5rem" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" as const, gap: "2rem", marginBottom: "2.5rem" }}>

          {/* Logo y descripción */}
          <div style={{ flex: 1, minWidth: "240px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
              <Heart size={18} color="#D4866A" fill="#D4866A" />
              <span style={{ color: "#7BA7A0", fontWeight: "bold", fontSize: "1rem", letterSpacing: "0.15em" }}>PSICOCHECHO</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "280px", margin: "0 0 1rem 0" }}>
              Psicología con enfoque Cognitivo-Conductual. Acompañando procesos de cambio real en Medellín y de forma virtual.
            </p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", margin: 0 }}>
              Tarjeta Profesional RETHUS · 2024
            </p>
          </div>

          {/* Links */}
          <div style={{ minWidth: "160px" }}>
            <p style={{ color: "white", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1rem" }}>Navegación</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.6rem" }}>
              {links.map((link) => {
                return (
                  <a key={link.href} href={link.href} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contacto */}
          <div style={{ minWidth: "200px" }}>
            <p style={{ color: "white", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1rem" }}>Contacto</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
              {contactItems.map((item) => {
                return (
                  <div key={item.valor} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ flexShrink: 0 }}>{item.icon}</span>
                    {item.link ? (
                      <a href={item.link} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>{item.valor}</a>
                    ) : (
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>{item.valor}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div style={{ minWidth: "200px" }}>
            <p style={{ color: "white", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1rem" }}>¿Listo para empezar?</p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
              Da el primer paso hacia tu bienestar emocional hoy.
            </p>
            <a href="#contacto" style={{ backgroundColor: "#D4866A", color: "white", padding: "10px 24px", borderRadius: "9999px", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "inline-block" }}>
              Agendar cita
            </a>
          </div>

        </div>

        {/* Línea inferior */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "1rem" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", margin: 0 }}>
            © 2025 Psicochecho · Sergio Steven Díaz Pulido · Todos los derechos reservados
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", margin: 0 }}>
            La información de este sitio no reemplaza la consulta profesional
          </p>
        </div>

      </div>
    </footer>
  );
}