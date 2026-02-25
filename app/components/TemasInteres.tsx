export default function TemasInteres() {
  const tagStyle = { backgroundColor: "#E8C4B0", color: "#D4866A", padding: "4px 14px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, display: "inline-block", marginBottom: "1rem" };

  const temas = [
    {
      emoji: "😰",
      categoria: "Ansiedad",
      titulo: "¿Qué es la ansiedad y cómo manejarla?",
      desc: "La ansiedad es una respuesta natural del cuerpo, pero cuando se vuelve excesiva puede afectar tu calidad de vida. Conoce las estrategias cognitivo-conductuales más efectivas.",
      color: "#7BA7A0",
      minLectura: "5 min",
    },
    {
      emoji: "😔",
      categoria: "Depresión",
      titulo: "Señales de depresión que no debes ignorar",
      desc: "Más allá de la tristeza, la depresión tiene síntomas específicos que muchas personas pasan por alto. Aprende a identificarlos y cuándo buscar ayuda profesional.",
      color: "#D4866A",
      minLectura: "6 min",
    },
    {
      emoji: "🧘",
      categoria: "Bienestar",
      titulo: "Técnicas de relajación basadas en evidencia",
      desc: "La respiración diafragmática, la relajación muscular progresiva y el mindfulness son herramientas poderosas para regular el sistema nervioso.",
      color: "#A8C5B5",
      minLectura: "4 min",
    },
    {
      emoji: "💭",
      categoria: "TCC",
      titulo: "¿Qué es la reestructuración cognitiva?",
      desc: "Una técnica de la Terapia Cognitivo-Conductual. Aprende cómo identificar y transformar los pensamientos que te generan malestar emocional.",
      color: "#7BA7A0",
      minLectura: "7 min",
    },
    {
      emoji: "💑",
      categoria: "Relaciones",
      titulo: "Comunicación asertiva en pareja",
      desc: "La forma en que nos comunicamos determina la calidad de nuestras relaciones. Descubre patrones de comunicación saludables y cómo cultivarlos.",
      color: "#D4866A",
      minLectura: "5 min",
    },
    {
      emoji: "🌱",
      categoria: "Crecimiento",
      titulo: "Autoestima: construyendo una relación sana contigo mismo",
      desc: "La autoestima no es algo con lo que se nace, se construye. Conoce los fundamentos psicológicos para desarrollar una relación más compasiva contigo mismo.",
      color: "#A8C5B5",
      minLectura: "6 min",
    },
  ];

  return (
    <section id="temas" style={{ backgroundColor: "white", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        <div style={{ textAlign: "center" as const, marginBottom: "4rem" }}>
          <span style={tagStyle}>Temas de Interés</span>
          <h2 style={{ color: "#2C2C2C", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
            Recursos para tu <span style={{ color: "#7BA7A0" }}>salud mental</span>
          </h2>
          <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
            Artículos y recursos psicoeducativos para que puedas entender mejor tus emociones y tomar decisiones informadas sobre tu bienestar.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {temas.map((t) => {
            return (
              <div key={t.titulo} style={{ backgroundColor: "#F5F0E8", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                <div style={{ backgroundColor: t.color, padding: "2rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                  {t.emoji}
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <span style={{ backgroundColor: "white", color: t.color, padding: "3px 12px", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 700 }}>
                      {t.categoria}
                    </span>
                    <span style={{ color: "#6B6B6B", fontSize: "0.75rem" }}>📖 {t.minLectura}</span>
                  </div>
                  <h3 style={{ color: "#2C2C2C", fontSize: "1rem", fontWeight: 700, margin: "0 0 0.75rem 0", lineHeight: 1.4 }}>{t.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 1.25rem 0" }}>{t.desc}</p>
                  <a href="#contacto" style={{ color: t.color, fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
                    Consultar con Sergio →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}