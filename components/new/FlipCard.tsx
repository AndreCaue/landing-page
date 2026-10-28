"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface IFlipCard {
  frontChildren: React.ReactNode;
  backChildren: React.ReactNode;
}

const FlipCard = ({ backChildren, frontChildren }: IFlipCard) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full cursor-pointer select-none"
      style={{
        perspective: 1000,
        margin: "auto",
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative shadow-lg rounded-2xl w-full min-h-[480px]"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          {frontChildren}
        </div>

        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {backChildren}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
