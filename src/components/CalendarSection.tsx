import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Cal, { getCalApi } from "@calcom/embed-react";

export function CalendarSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="py-24 bg-black" id="calendar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Überschrift */}
          <h2 className="text-4xl font-bold text-white mb-6">
            Kostenlosen Termin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              vereinbaren
            </span>
          </h2>

          {/* Beschreibung */}
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Wählen Sie einen passenden kostenlosen Termin für unser Gespräch aus.
          </p>

          {/* WhatsApp Hinweis */}
          <p className="text-gray-400 text-base mt-6">
            Oder schreiben Sie mir direkt auf{" "}
            <a
              href="https://wa.me/4915733275381"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline hover:text-green-300"
            >
              WhatsApp: +49 1573 3275381
            </a>
          </p>
        </motion.div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
          <Cal
            namespace="30min"
            calLink="ai-rezeption/30min"
            config={{ layout: "month_view" }}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
          />
        </div>
      </div>
    </section>
  );
}
