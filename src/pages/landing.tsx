import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Virtuelle Rezeptionistin – Jetzt testen | AI Rezeption";
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-6 py-20 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Rezeptionistin gesucht?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Unsere KI übernimmt das für Sie.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          AI Rezeption ist Ihre virtuelle Telefon- und Empfangskraft:
          <br />
          24/7 erreichbar, kein Urlaub, keine Personalkosten.
        </p>

        <div className="grid gap-6 mb-10 text-left max-w-xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-green-400 text-2xl">✓</span>
            <span>Kundenanrufe automatisch entgegennehmen</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-green-400 text-2xl">✓</span>
            <span>Termine direkt in Ihren Kalender eintragen</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-green-400 text-2xl">✓</span>
            <span>Kein Installationsaufwand – einfach starten</span>
          </div>
        </div>

        <a
          href="/#calendar"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Jetzt Beratungsgespräch buchen
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
