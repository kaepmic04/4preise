import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function CalendarSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const loadCalScript = () => {
      const script = document.createElement('script');
      script.innerHTML = `
        (function (C, A, L) { 
          let p = function (a, ar) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; 
              cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); }; 
              const namespace = ar[1]; 
              api.q = api.q || []; 
              if(typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else {
                p(cal, ar); 
              }
              return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
      `;
      document.body.appendChild(script);

      // Initialize Cal after script is loaded
      const initScript = document.createElement('script');
      initScript.innerHTML = `
        Cal("init", "30min", {origin:"https://cal.com"});

        Cal.ns["30min"]("inline", {
          elementOrSelector:"#my-cal-inline",
          config: {"layout":"month_view"},
          calLink: "michel-kappler-lahrgc/30min",
        });

        Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      `;
      document.body.appendChild(initScript);
    };

    loadCalScript();

    return () => {
      // Cleanup scripts on component unmount
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (script.innerHTML.includes('Cal(') || script.innerHTML.includes('function (C, A, L)')) {
          script.remove();
        }
      });
    };
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Termin{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              vereinbaren
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Wählen Sie einen passenden Termin für unser Gespräch aus.
          </p>
        </motion.div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
          <div 
            id="my-cal-inline" 
            style={{ width: '100%', minHeight: '600px', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}