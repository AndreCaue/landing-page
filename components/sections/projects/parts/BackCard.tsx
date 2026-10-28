import React from "react";
import { NewBadge } from "@/components/new/NewBadge";
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
    <div className="text-white grid grid-cols-2 gap-2 justify-between my-2">
      <h2 className="col-span-2 text-center text-base sm:text-lg font-medium mb-1">
        Key Features
      </h2>

      <div className="space-y-1 text-xs">
        {firstColumn.map((resource, index) => (
          <span key={index} className="block text-gray-300">
            ✓ {resource}
          </span>
        ))}
      </div>

      <div className="space-y-1 text-xs">
        {secondColumn.map((resource, index) => (
          <span key={index} className="block text-gray-300">
            ✓ {resource}
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
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-white/20 transition backdrop-blur-sm h-full flex flex-col justify-between overflow-y-auto">
      <div className="space-y-3">
        <div>
          <h3 className="text-base sm:text-lg font-medium text-white text-center underline">
            Technology
          </h3>
          <div className="flex flex-wrap justify-center gap-2 my-2">
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              techs.map((item: any) => (
                <NewBadge type={item} key={item} />
              ))
            }
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-medium text-white text-center underline">
            Libraries
          </h3>
          <div className="flex flex-wrap gap-2 my-2 justify-center">
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              libs.map((item: any, idx) => (
                <NewBadge type={item} key={idx} />
              ))
            }
          </div>
        </div>

        <ContentDescription resource={resource} />
      </div>

      <div className="flex justify-between items-center my-1 pt-3 border-t border-white/10">
        {linkGit && (
          <AnimatedLink
            href={linkGit}
            target="_blank"
            className="font-mono text-xs sm:text-sm"
          >
            {"< Github />"}
          </AnimatedLink>
        )}
        {linkSite === "" ? (
          <AnimatedLink
            href={linkSite}
            target="_blank"
            className="font-mono text-xs sm:text-sm text-green-500 hover:text-green-500"
          >
            Em desenvolvimento
          </AnimatedLink>
        ) : (
          <AnimatedLink
            href={linkSite || ""}
            target="_blank"
            className="font-mono text-xs sm:text-sm text-green-500 hover:text-green-500"
          >
            Visitar Site
          </AnimatedLink>
        )}
      </div>
    </div>
  );
};
