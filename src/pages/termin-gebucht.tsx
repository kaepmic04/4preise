import { useEffect } from "react";

const TerminGebucht = () => {
  useEffect(() => {
    document.title = "Termin gebucht – AI-Rezeption";
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          🎉 Vielen Dank für Ihre Buchung!
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Ihr Termin wurde erfolgreich eingetragen. <br />
          Wir freuen uns darauf, mit Ihnen zu sprechen.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition"
        >
          Zurück zur Startseite
        </a>
      </div>
    </section>
  );
};

export default TerminGebucht;
