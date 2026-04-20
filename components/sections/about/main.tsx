import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: "some" });

  const text = "André Cauê G. C. Araújo";
  const letters = text.split("");

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen grid grid-cols-2 items-center justify-center text-center px-6 relative border"
    >
      <div className="border border-red-500">
        <Image
          alt="Foto Brigada de incêndio"
          src="https://i.ibb.co/spsbsr7W/photo-4952258414151142215-y.jpg"
          height={100}
          width={300}
          priority
        />
      </div>
      <div className="border border-red-500">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white tracking-wide"
          aria-label={text}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl"
        >
          2 anos de experiência com <strong>JavaScript, React e Next.js</strong>
          .
          <br />
          Crio interfaces rápidas, acessíveis e com foco em performance.
        </motion.p>
      </div>
    </section>
  );
};
