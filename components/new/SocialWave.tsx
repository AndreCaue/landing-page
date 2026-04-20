"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { InstagramIcon, TwitterIcon, Youtube, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";

type TIconList = {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  url: string;
  textColor: string;
};

const icons: TIconList[] = [
  {
    id: 1,
    Icon: InstagramIcon,
    url: "https://www.instagram.com/darthsekhmet/",
    textColor: "hover:text-pink-500",
  },
  {
    id: 2,
    Icon: TwitterIcon,
    url: "https://x.com/DarthanhSekhmet",
    textColor: "hover:text-blue-500",
  },
  {
    id: 3,
    Icon: Youtube,
    url: "https://.youtube.com/@DarthanhSekhmet",
    textColor: "hover:text-red-500",
  },
  {
    id: 4,
    Icon: Linkedin,
    url: "https://www.linkedin.com/in/andre-caue-b72a03287/?locale=en",
    textColor: "hover:text-cyan-500",
  },
];

export const SocialWave = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-8 md:gap-12 py-8">
      {icons.map((item, index) => (
        <motion.button
          key={item.id}
          className="relative hover:cursor-pointer "
          onClick={() => router.push(item.url)}
          animate={{
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: index * 0.25,
          }}
        >
          <item.Icon className={cn("w-5 h-5  text-white/80", item.textColor)} />
        </motion.button>
      ))}
    </div>
  );
};
