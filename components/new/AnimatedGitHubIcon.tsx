import { motion } from "framer-motion";

export default function AnimatedGitHubIcon({ size = 24, className = "" }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.path
        d="M12 .3C5.4.3.1 5.6.1 12.2c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2 1 .1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C23.9 5.6 18.6.3 12 .3z"
        variants={{
          rest: { scale: 1 },
          hover: {
            scale: [1, 1.1, 1],
            transition: {
              duration: 0.4,
              ease: "easeInOut",
            },
          },
        }}
      />

      <motion.g
        variants={{
          rest: { opacity: 1 },
          hover: {
            opacity: [1, 0, 1],
            transition: {
              duration: 0.6,
              times: [0, 0.5, 1],
              repeat: 1,
            },
          },
        }}
      >
        <circle cx="8.5" cy="9.5" r="1.2" fill="#fff" />
        <circle cx="8.5" cy="9.5" r="0.6" fill="#000" />

        <circle cx="15.5" cy="9.5" r="1.2" fill="#fff" />
        <circle cx="15.5" cy="9.5" r="0.6" fill="#000" />
      </motion.g>

      <motion.circle
        cx="16"
        cy="8"
        r="1"
        fill="#fff"
        opacity="0.3"
        variants={{
          rest: { scale: 0 },
          hover: {
            scale: [0, 1.5, 0],
            transition: { duration: 0.5 },
          },
        }}
      />
    </motion.svg>
  );
}
