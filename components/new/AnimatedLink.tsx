"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface AnimatedLinkProps {
  href: string;
  children: string;
  className?: string;
  target?: "_blank" | "_self";
}

export default function AnimatedLink({
  href,
  children,
  className = "",
  target = "_blank",
}: AnimatedLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(children, "teste");
  const letters = children.split("");

  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-block font-medium text-blue-500 hover:text-blue-600 transition-colors ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
      style={{ display: "inline-block" }}
    >
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.span
            key="typing"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="flex"
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>
        ) : (
          <motion.span
            key="static"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
