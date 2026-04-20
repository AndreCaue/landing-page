"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex items-center gap-1 p-1 bg-white/10 border border-white/10 backdrop-blur-md rounded-full shadow-inner select-none pointer-events-auto">
      <button
        onClick={() => setLanguage("pt")}
        className={`relative z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors duration-300 ${
          language === "pt" ? "text-white" : "text-white/50 hover:text-white/80"
        }`}
        aria-label="Português"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 700"
          className="w-5 h-5 md:w-6 md:h-6 drop-shadow-md"
        >
          <rect width="1000" height="700" fill="#009C3B" />
          <path d="M500 100 L200 350 L500 600 L800 350 Z" fill="#FFDF00" />
          <circle cx="500" cy="350" r="120" fill="#002776" />
          <circle cx="500" cy="350" r="75" fill="#FFF" />
          <circle cx="500" cy="350" r="55" fill="#002776" />
        </svg>
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={`relative z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors duration-300 ${
          language === "en" ? "text-white" : "text-white/50 hover:text-white/80"
        }`}
        aria-label="English"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7410 3900"
          className="w-5 h-5 md:w-6 md:h-6 drop-shadow-md"
        >
          <path d="M0,0h7410v3900H0" fill="#B31942" />

          <path
            d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0"
            stroke="#FFF"
            strokeWidth="300"
          />

          <path d="M0,0h2964v2100H0" fill="#0A3161" />

          <g fill="#FFF">
            <g id="s18">
              <g id="s9">
                <g id="s5">
                  <g id="s4">
                    <path
                      id="s"
                      d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"
                    />
                    <use xlinkHref="#s" y="420" />
                    <use xlinkHref="#s" y="840" />
                    <use xlinkHref="#s" y="1260" />
                  </g>
                  <use xlinkHref="#s" y="1680" />
                </g>
                <use xlinkHref="#s4" x="247" y="210" />
              </g>
              <use xlinkHref="#s9" x="494" />
            </g>
            <use xlinkHref="#s18" x="988" />
            <use xlinkHref="#s9" x="1976" />
            <use xlinkHref="#s5" x="2470" />
          </g>
        </svg>
      </button>

      <motion.div
        className="absolute top-1 left-1 bottom-1 w-8 md:w-10 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-full shadow-lg border border-white/20"
        initial={false}
        animate={{
          x: language === "pt" ? 0 : "100%",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        style={{
          width: "calc(50% - 4px)",
        }}
      />
    </div>
  );
};
