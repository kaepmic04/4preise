import { useEffect } from "react";

const TerminGebucht = () => {
  useEffect(() => {
    document.title = "Termin gebucht – AI-Rezeption";
  }, []);

  return (
    <main style={{ padding: "2rem", textAlign: "center", color: "white" }}>
      <h1>Vielen Dank für Ihre Buchung!</h1>
      <p>Ihr Termin wurde erfolgreich eingetragen. Wir freuen uns auf Sie.</p>
      <a href="/" style={{ display: "inline-block", marginTop: "2rem", color: "#00BFFF" }}>
        Zurück zur Startseite
      </a>
    </main>
  );
};

export default TerminGebucht;
