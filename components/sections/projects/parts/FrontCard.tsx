"use client";

import React from "react";
import { motion } from "framer-motion";
import { cardVariantsLeft } from "@/lib/animation";
import Image from "next/image";

type TFrontCard = {
  src: string;
  title: string;
  description: string;
};

export const FrontCard = ({ src, title, description }: TFrontCard) => {
  return (
    <motion.div
      variants={cardVariantsLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/8 transition backdrop-blur-sm"
    >
      <div className="aspect-video rounded-xl overflow-hidden bg-gray-900 mb-5">
        <Image
          src={src}
          className="object-cover w-full h-full opacity-90 hover:opacity-100 transition"
          alt="Dashboard UI"
          height={400}
          width={600}
        />
      </div>
      <h3 className="text-xl font-medium text-white">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{description}</p>
    </motion.div>
  );
};
