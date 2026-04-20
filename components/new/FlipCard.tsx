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
      style={{
        perspective: 1000,
        margin: "auto",
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative shadow-lg rounded-2xl "
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {frontChildren}
        </motion.div>

        <motion.div
          initial={{ rotateY: 180 }}
          className="absolute top-0 w-full"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {backChildren}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
