import { useEffect } from "react";

// 👇 TypeScript-Erweiterung für window.gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const TerminGebucht = () => {
  useEffect(() => {
    document.title = "Termin gebucht – AI-Rezeption";

    // 🎯 Google Ads Conversion Tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'ads_conversion_BOOK_APPOINTMENT_1', {});
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white text-black">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Vielen Dank für Ihre Buchung!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Ihr Termin wurde erfolgreich eingetragen. Wir freuen uns auf das Gespräch.
      </p>
      <a
        href="/"
        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Zurück zur Startseite
      </a>
    </main>
  );
};

export default TerminGebucht;
