"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type TFrontCard = {
  src: string;
  title: string;
  description: string;
};

export const FrontCard = ({ src, title, description }: TFrontCard) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-white/20 hover:bg-white/8 transition backdrop-blur-sm h-full flex flex-col justify-between">
      <div>
        <div className="aspect-video rounded-xl overflow-hidden bg-gray-900 mb-4 sm:mb-5">
          <Image
            src={src}
            className="object-cover w-full h-full opacity-90 hover:opacity-100 transition"
            alt={title}
            height={400}
            width={600}
          />
        </div>
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{description}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
        <span className="flex items-center gap-1.5 text-blue-400 font-mono">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          {language === "pt" ? "Ver detalhes ↻" : "View details ↻"}
        </span>
      </div>
    </div>
  );
};
