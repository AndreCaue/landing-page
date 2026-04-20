"use client";
import { motion } from "framer-motion";
import { sectionVariant } from "@/lib/animation";
import CardFloating from "@/components/new/FloatingCard";
import { DeckCard } from "@/components/new/DeckCard";
import Project from "@/components/sections/projects/main";
import TimelineSection from "@/components/sections/about/TimelineSection";
import ContactFab from "@/components/new/Contact";
import { getCurrentYear } from "@/lib/helpers/generics";
import { Hero } from "@/components/sections/hero/main";

import { SocialWave } from "@/components/new/SocialWave";
import { useLanguage } from "@/context/LanguageContext";
export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-blue-600 selection:text-white">
        <CardFloating svg={<DeckCard id="A-spades" />} className="h-5 w-5" />

        <Hero />

        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          id="projects"
          className="px-6 py-28 max-w-6xl mx-auto"
        >
          <Project />
        </motion.section>

        <TimelineSection />

        <section id="contact" className="py-24 text-center">
          <p className="text-gray-400">{t("footerText")}</p>
          <SocialWave />
          <ContactFab />
        </section>

        <footer className="text-center py-10 text-gray-600 text-sm border-t border-white/10">
          © {getCurrentYear()} • André Cauê
        </footer>
      </main>
    </>
  );
}
