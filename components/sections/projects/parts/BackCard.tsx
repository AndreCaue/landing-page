import React from "react";
import { motion } from "framer-motion";
import { cardVariantsRight } from "@/lib/animation";
import { NewBadge, TBadgeType } from "@/components/new/NewBadge";
import AnimatedLink from "@/components/new/AnimatedLink";

interface ContentDescriptionProps {
  resource: string;
}

const ContentDescription = ({ resource }: ContentDescriptionProps) => {
  const itens = resource
    .split("_")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const metade = Math.ceil(itens.length / 2);
  const firstColumn = itens.slice(0, metade);
  const secondColumn = itens.slice(metade);

  return (
    <div className="text-white grid grid-cols-2 justify-between">
      <h2 className="col-span-2 text-center text-xl m-2">Key Features</h2>

      <div className="space-y-1">
        {firstColumn.map((resource, index) => (
          <span key={index} className="block">
            {resource} ✓
          </span>
        ))}
      </div>

      <div className="space-y-1">
        {secondColumn.map((resource, index) => (
          <span key={index} className="block">
            {resource} ✓
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContentDescription;

type TBackCard = {
  techs: readonly string[];
  libs: readonly string[];
  resource: string;
  linkSite?: string;
  linkGit?: string;
};

export const BackCard = ({
  techs,
  libs,
  resource,
  linkGit,
  linkSite,
}: TBackCard) => {
  return (
    <motion.div
      variants={cardVariantsRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition backdrop-blur-sm"
    >
      <h3 className="text-xl font-medium text-white text-center underline">
        Technology
      </h3>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          techs.map((item: any) => (
            <NewBadge type={item} key={item} className="" />
          ))
        }
      </div>

      <h3 className="text-xl font-medium text-white text-center underline">
        Libraries
      </h3>

      <div className="flex flex-wrap gap-4 my-4 justify-center">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          libs.map((item: any, idx) => (
            <NewBadge type={item} key={idx} />
          ))
        }
      </div>
      <ContentDescription resource={resource} />

      <div className="flex justify-between my-2.5">
        {linkGit && (
          <AnimatedLink
            href={linkGit}
            target="_blank"
            className="font-mono text-sm"
          >
            {"< Github />"}
          </AnimatedLink>
        )}
        {linkSite && (
          <AnimatedLink
            href={linkSite}
            target="_blank"
            className="font-mono text-sm text-green-500 hover:text-green-500"
          >
            Visitar Site
          </AnimatedLink>
        )}
      </div>
    </motion.div>
  );
};
