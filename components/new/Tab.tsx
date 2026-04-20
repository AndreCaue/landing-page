"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const tabsConfig = [
  { id: "projects", key: "tabProjects", href: "#projects" },
  { id: "about", key: "tabAbout", href: "#about" },
  { id: "contact", key: "tabContact", href: "#contact" },
] as const;

export const TabButton = () => {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string>(tabsConfig[0].id);
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = window.scrollY + window.innerHeight * 0.4;

          for (const tab of tabsConfig) {
            const section = document.querySelector(tab.href);
            if (section) {
              const { offsetTop, offsetHeight } = section as HTMLElement;
              if (offset >= offsetTop && offset < offsetTop + offsetHeight) {
                setActiveId(tab.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (!section) return;

    isScrollingRef.current = true;
    setActiveId(tabsConfig.find((t) => t.href === href)!.id);

    section.scrollIntoView({ behavior: "smooth" });

    const timeout = setTimeout(() => {
      isScrollingRef.current = false;
    }, 900);

    return () => clearTimeout(timeout);
  };

  return (
    <motion.nav
      className={`
        left-0 right-0 z-50 flex justify-center gap-8 md:gap-12 px-6 md:px-8
        ${isScrolled ? "fixed top-0" : "relative mt-8 md:mt-12"}
        transition-all duration-300
      `}
      animate={{
        padding: isScrolled ? "1rem 0" : "0rem",
        backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.75)" : "transparent",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.12)" : "none",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="flex gap-8 md:gap-12 relative flex-1 justify-center items-center">
        {tabsConfig.map((tab) => {
          const isActive = activeId === tab.id;
          const isHovered = hoveredId === tab.id;

          return (
            <motion.a
              key={tab.id}
              href={tab.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(tab.href);
              }}
              onMouseEnter={() => setHoveredId(tab.id)}
              className={`
                relative z-10 px-3 md:px-5 py-3 text-base md:text-lg font-medium
                transition-all duration-300 cursor-pointer select-none
                ${isActive ? "text-white" : "text-white/70 hover:text-white"}
              `}
              whileTap={{ scale: 0.95 }}
            >
              {t(tab.key)}

              {isHovered && !isActive && (
                <motion.div
                  className="absolute inset-x-0 bottom-1 h-0.5 bg-white/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.25 }}
                />
              )}

              {isActive && (
                <motion.div
                  className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-cyan-400 via-white to-purple-400 rounded-full shadow-2xl"
                  layoutId="magic-underline"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 32,
                  }}
                />
              )}
            </motion.a>
          );
        })}
      </div>

      <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2">
        <LanguageSwitcher />
      </div>
    </motion.nav>
  );
};
