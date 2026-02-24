export default function SobreMi() {
  const sectionStyle = { backgroundColor: "#ffffff", padding: "6rem 1.5rem" };
  const tagStyle = { backgroundColor: "#E8C4B0", color: "#D4866A", padding: "4px 14px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, display: "inline-block", marginBottom: "1rem" };
  const cardStyle = { backgroundColor: "#F5F0E8", borderRadius: "16px", padding: "1.5rem", display: "flex", alignItems: "flex-start", gap: "1rem" };
  const iconBox = { backgroundColor: "#7BA7A0", borderRadius: "12px", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.3rem" };

  const formacion = [
    { icon: "🎓", titulo: "Psicólogo", sub: "Tecnológico de Antioquia · 2024" },
    { icon: "📋", titulo: "Diplomado TCC", sub: "COLPSIC · 120 horas · 2024" },
    { icon: "🧠", titulo: "Psicología Clínica y de la Salud", sub: "Tecnológico de Antioquia · 2024" },
    { icon: "👶", titulo: "Evaluación Neuropsicológica Infantil", sub: "Tecnológico de Antioquia · 2024" },
  ];

  const valores = [
    { icon: "💚", titulo: "Empatía", desc: "Cada persona es única. Escucho sin juzgar y acompaño desde la comprensión genuina." },
    { icon: "🔬", titulo: "Evidencia científica", desc: "Trabajo con técnicas validadas por la ciencia para resultados concretos y duraderos." },
    { icon: "🤝", titulo: "Alianza terapéutica", desc: "La relación terapéutica es la base del cambio. Construimos juntos el proceso." },
  ];

  return (
    <section id="sobre-mi" style={sectionStyle}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" as const, alignItems: "flex-start" }}>

          {/* Columna izquierda */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <span style={tagStyle}>Sobre mí</span>
            <h2 style={{ color: "#2C2C2C", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Acompañando procesos de <span style={{ color: "#7BA7A0" }}>cambio real</span>
            </h2>
            <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
              Soy Sergio Steven Díaz Pulido, psicólogo egresado del Tecnológico de Antioquia con sólida formación en Terapia Cognitivo-Conductual y más de 2 años de experiencia en atención individual.
            </p>
            <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Me he desempeñado en contextos clínicos, educativos y comunitarios, lo que me ha dado una visión integral del ser humano. Certificado en TCC por COLPSIC, con Tarjeta Profesional RETHUS vigente.
            </p>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
              {formacion.map((item) => {
                return (
                  <div key={item.titulo} style={cardStyle}>
                    <div style={iconBox}>{item.icon}</div>
                    <div>
                      <p style={{ color: "#2C2C2C", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 0.2rem 0" }}>{item.titulo}</p>
                      <p style={{ color: "#6B6B6B", fontSize: "0.85rem", margin: 0 }}>{item.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Columna derecha */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <div style={{ backgroundColor: "#7BA7A0", borderRadius: "24px", height: "280px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
              <p style={{ color: "white", fontSize: "5rem" }}>👨‍⚕️</p>
            </div>

            <h3 style={{ color: "#2C2C2C", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Mis valores profesionales</h3>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
              {valores.map((item) => {
                return (
                  <div key={item.titulo} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <p style={{ color: "#2C2C2C", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 0.25rem 0" }}>{item.titulo}</p>
                      <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}