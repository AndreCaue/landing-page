import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function useTyping(text: string, enabled: boolean, speed = 40) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!enabled) {
      setDisplayed("");
      return;
    }

    setDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i === text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, enabled, speed]);

  return displayed;
}

export default function JornadaHeader() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    once: false,
  });

  const titleText = t("journeyTitle");
  const subtitleText = t("journeyDesc");
  const title = useTyping(titleText, isInView, 60);
  const subtitle = useTyping(
    subtitleText,
    isInView,
    35,
  );

  return (
    <motion.section
      ref={ref}
      className="text-center py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 min-h-16">
        <span className="inline-block">
          {title}
          {title.length < titleText.length && (
            <span className="animate-pulse ml-1">|</span>
          )}
        </span>
      </h2>

      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed min-h-24">
        {subtitle}
        {subtitle.length < 90 && subtitle.length > 0 && (
          <span className="animate-pulse">|</span>
        )}
      </p>
    </motion.section>
  );
}
