export default function Hero() {
  const badgeStyle = { backgroundColor: "#A8C5B5", color: "white", padding: "6px 16px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em" };
  const btnPrimary = { backgroundColor: "#D4866A", color: "white", padding: "14px 32px", borderRadius: "9999px", textDecoration: "none", fontSize: "1rem", fontWeight: 600 };
  const btnSecondary = { backgroundColor: "transparent", color: "#7BA7A0", padding: "14px 32px", borderRadius: "9999px", textDecoration: "none", fontSize: "1rem", fontWeight: 600, border: "2px solid #7BA7A0" };
  const statNum = { color: "#7BA7A0", fontSize: "1.8rem", fontWeight: 800, margin: 0 };
  const statLabel = { color: "#6B6B6B", fontSize: "0.85rem", margin: 0 };
  const checkStyle = { backgroundColor: "#A8C5B5", color: "white", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 };

  const checks = [
    "Atención presencial y virtual",
    "Terapia individual y de pareja",
    "Tarjeta profesional RETHUS",
  ];

  return (
    <section id="inicio" style={{ backgroundColor: "#F5F0E8", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "80px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "4rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" as const }}>

        {/* Texto izquierda */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <span style={badgeStyle}>Psicólogo • enfoque desde el modelo cognitivo conductual</span>

          <h1 style={{ color: "#2C2C2C", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.2, marginTop: "1.5rem", marginBottom: "1rem" }}>
            Tu bienestar <br />
            <span style={{ color: "#7BA7A0" }}>emocional</span> es <br />
            lo primero
          </h1>

          <p style={{ color: "#6B6B6B", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "480px" }}>
            Soy Sergio Steven Díaz, psicólogo con formación en terapia cognitivo conductual. Te acompaño en el proceso de entender tus emociones, superar obstáculos y construir una vida más plena.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
            <a href="#contacto" style={btnPrimary}>Agendar cita</a>
            <a href="#sobre-mi" style={btnSecondary}>Conocer más</a>
          </div>

          <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" as const }}>
            <div>
              <p style={statNum}>2+</p>
              <p style={statLabel}>Años de experiencia</p>
            </div>
            <div>
              <p style={statNum}>200+</p>
              <p style={statLabel}>Pacientes atendidos</p>
            </div>
            <div>
              <p style={statNum}>TCC</p>
              <p style={statLabel}>Certificado COLPSIC</p>
            </div>
          </div>
        </div>

        {/* Tarjeta derecha */}
        <div style={{ flex: "0 0 340px", minWidth: "280px" }}>
          <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "2rem", boxShadow: "0 8px 40px rgba(123,167,160,0.15)" }}>
            <div style={{ backgroundColor: "#7BA7A0", borderRadius: "16px", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
              <p style={{ color: "white", fontSize: "4rem" }}>🧠</p>
            </div>
            <h3 style={{ color: "#2C2C2C", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.5rem 0" }}>Sergio Steven Díaz Pulido</h3>
            <p style={{ color: "#6B6B6B", fontSize: "0.9rem", margin: "0 0 1rem 0" }}>Psicólogo — TCC · Medellín, Colombia</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
              {checks.map((text) => {
                return (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={checkStyle}>✓</span>
                    <span style={{ color: "#2C2C2C", fontSize: "0.9rem" }}>{text}</span>
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