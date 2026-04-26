"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { fadeUp, itemVariant } from "@/lib/animation";
import JornadaHeader from "./Header";
import { useLanguage } from "@/context/LanguageContext";

const phasesConfig = [
  {
    age: 17,
    titleKey: "phase1Title",
    descKey: "phase1Desc",
    image:
      "https://doce-ilusao-public-dev.s3.sa-east-1.amazonaws.com/landing/download.gif",
    alt: "Mágico realizando truque",
  },
  {
    age: 19,
    titleKey: "phase2Title",
    descKey: "phase2Desc",
    image: "https://i.ibb.co/spsbsr7W/photo-4952258414151142215-y.jpg",
    alt: "Pessoa organizando estoque",
  },
  {
    age: 24,
    titleKey: "phase3Title",
    descKey: "phase3Desc",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Desenvolvedor codificando",
  },
] as const;

export default function TimelineSection() {
  const { t } = useLanguage();
  return (
    <section
      className="py-20 px-6 bg-linear-to-b from-slate-50 to-white"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <JornadaHeader />

        <div className="relative">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "90%", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-purple-400 to-blue-500 hidden md:block"
          />

          {phasesConfig.map((phase, index) => (
            <TimelineItem key={index} phase={phase} index={index} t={t} />
          ))}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.4, once: false }}
            className="text-center mt-20"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="inline-block p-8 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-3xl shadow-2xl"
            >
              <p className="text-lg font-semibold">{t("timelineToday")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  phase,
  index,
  t,
}: {
  phase: any;
  index: number;
  t: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.35, once: false });

  return (
    <motion.div
      ref={ref}
      variants={itemVariant}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={`relative flex items-center justify-center mb-16 md:mb-24
      ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
    >
      <motion.div
        className={`w-full md:w-5/12 ${
          index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
        } text-center md:text-left`}
      >
        <motion.div
          whileHover={{ scale: 1.04, y: -4 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100"
        >
          <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
            <span className="text-3xl font-bold text-purple-600">
              {phase.age}
            </span>
            <span className="text-sm text-slate-500">{t("years")}</span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            {t(phase.titleKey)}
          </h3>
          <p className="text-slate-600">{t(phase.descKey)}</p>
        </motion.div>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.07,
          rotate: index % 2 === 0 ? 3 : -3,
          y: -6,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="w-full md:w-5/12 flex justify-center my-6 md:my-0"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src={phase.image}
            alt={phase.alt}
            width={320}
            height={320}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <div className="md:hidden w-1 h-16 bg-linear-to-b from-purple-400 to-blue-500 mx-auto"></div>
    </motion.div>
  );
}
