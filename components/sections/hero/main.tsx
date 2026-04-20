import { TabButton } from "@/components/new/Tab";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t, language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" });
  const mainControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    mainControls.set("hidden");

    const timeout = setTimeout(() => {
      mainControls.start("visible");
    }, 50);

    return () => clearTimeout(timeout);
  }, [language, mainControls]);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.3),transparent_60%)]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.25),transparent_60%)]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.9, 1.2],
            x: [100, -50, 100],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter relative">
            <motion.span
              className="absolute inset-0 bg-clip-text text-transparent bg-linear-to-r from-slate-400 via-white to-gray-300"
              animate={{
                x: [0, -3, 3, -2, 0],
                opacity: [1, 0.8, 0.9, 0.8, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              André Cauê G. C. Araújo
            </motion.span>
            <motion.span
              className="relative bg-clip-text text-transparent bg-linear-to-r from-slate-800 via-white/20 to-gray-900"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ delay: 0.3, duration: 1 }}
            >
              André Cauê G. C. Araújo
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-4 text-2xl md:text-3xl font-medium text-gray-300"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Front-end Developer <span className="text-blue-400">&</span> UI
            Engineer
          </motion.p>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-light text-gray-100 leading-tight"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ delay: 0.5 }}
        >
          {t("heroTitle")
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={`${language}-${word}-${i}`}
                className="inline-block mr-3"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                  delay: 0.8 + i * 0.08,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.span>
            ))}

          <br />

          <motion.span
            className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-white to-purple-300"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ delay: 1.6, duration: 0.8, ease: "backOut" }}
          >
            {t("heroTitleHighlight")}
          </motion.span>
        </motion.h2>

        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ delay: 1.8, duration: 0.9 }}
        >
          {t("heroDescription")}
        </motion.p>

        <TabButton />
      </div>
    </motion.section>
  );
};
