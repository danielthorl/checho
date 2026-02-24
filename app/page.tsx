import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Servicios from "./components/Servicios";
import TemasInteres from "./components/TemasInteres";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SobreMi />
      <Servicios />
      <TemasInteres />
      <Contacto />
      <Footer />
    </main>
  );
}