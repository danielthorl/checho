export default function Servicios() {
  const tagStyle = { backgroundColor: "#A8C5B5", color: "white", padding: "4px 14px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, display: "inline-block", marginBottom: "1rem" };

  const servicios = [
    {
      icon: "🧠",
      titulo: "Terapia Individual",
      desc: "Atención personalizada para trabajar ansiedad, depresión, estrés, autoestima y otros desafíos emocionales desde el enfoque cognitivo-conductual.",
      tags: ["Ansiedad", "Depresión", "Autoestima"],
      color: "#7BA7A0",
    },
    {
      icon: "💑",
      titulo: "Terapia de Pareja",
      desc: "Espacio seguro para mejorar la comunicación, resolver conflictos y fortalecer el vínculo afectivo en la relación.",
      tags: ["Comunicación", "Conflictos", "Vínculos"],
      color: "#D4866A",
    },
    {
      icon: "📋",
      titulo: "Evaluación Psicológica",
      desc: "Aplicación e interpretación de pruebas psicométricas para diagnóstico, orientación y toma de decisiones clínicas o educativas.",
      tags: ["BASC-3", "16PF", "IHE"],
      color: "#A8C5B5",
    },
    {
      icon: "🚨",
      titulo: "Intervención en Crisis",
      desc: "Acompañamiento inmediato en situaciones de crisis emocional, duelo, trauma o eventos vitales que generan desestabilización.",
      tags: ["Crisis", "Duelo", "Trauma"],
      color: "#E8C4B0",
    },
    {
      icon: "💻",
      titulo: "Atención Virtual",
      desc: "Sesiones de terapia online con la misma calidad y confidencialidad de la atención presencial, desde la comodidad de tu hogar.",
      tags: ["Online", "Flexible", "Privado"],
      color: "#7BA7A0",
    },
    {
      icon: "👶",
      titulo: "Atención Infantil y Adolescentes",
      desc: "Evaluación e intervención psicológica especializada para niños y adolescentes en contextos educativos, familiares y clínicos.",
      tags: ["Niños", "Adolescentes", "Educativo"],
      color: "#D4866A",
    },
  ];

  return (
    <section id="servicios" style={{ backgroundColor: "#F5F0E8", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        <div style={{ textAlign: "center" as const, marginBottom: "4rem" }}>
          <span style={tagStyle}>Servicios</span>
          <h2 style={{ color: "#2C2C2C", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
            ¿En qué puedo <span style={{ color: "#7BA7A0" }}>ayudarte?</span>
          </h2>
          <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
            Ofrezco atención psicológica integral en modalidad presencial y virtual, adaptada a tus necesidades y contexto.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {servicios.map((s) => {
            return (
              <div key={s.titulo} style={{ backgroundColor: "white", borderRadius: "20px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", borderTop: `4px solid ${s.color}` }}>
                <div style={{ backgroundColor: s.color, borderRadius: "14px", width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1.25rem" }}>
                  {s.icon}
                </div>
                <h3 style={{ color: "#2C2C2C", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.75rem 0" }}>{s.titulo}</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 1.25rem 0" }}>{s.desc}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" as const }}>
                  {s.tags.map((tag) => {
                    return (
                      <span key={tag} style={{ backgroundColor: "#F5F0E8", color: "#7BA7A0", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600 }}>
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center" as const, marginTop: "3rem" }}>
          <a href="#contacto" style={{ backgroundColor: "#D4866A", color: "white", padding: "14px 36px", borderRadius: "9999px", textDecoration: "none", fontSize: "1rem", fontWeight: 600 }}>
            Agendar una sesión
          </a>
        </div>

      </div>
    </section>
  );
}