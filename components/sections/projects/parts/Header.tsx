import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Header = () => {
  const { t } = useLanguage();
  return (
    <motion.h2
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="text-3xl md:text-4xl font-semibold text-center mb-16"
    >
      {t("tabProjects")}
    </motion.h2>
  );
};
