import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  viteSvg,
  nextSvg,
  cssSvg,
  jsSvg,
  reactSvg,
  tsSvg,
  tailSvg,
  piton,
  postgresSvg,
  fast,
} from "@/public/index";
import { cn } from "@/lib/utils";
import AnimatedGitHubIcon from "./AnimatedGitHubIcon";

const ICONS = {
  NextJS: nextSvg,
  Vite: viteSvg,
  JS: jsSvg,
  CSS: cssSvg,
  React: reactSvg,
  TypeScript: tsSvg,
  Recharts: null,
  Zustand: null,
  Shadcn: null,
  TailwindCSS: tailSvg,
  SQLAlchemy: null,
  PostgreSQL: postgresSvg,
  FastAPI: fast,
  Python: piton,
  github: AnimatedGitHubIcon,
} as const;

const ICONS_CLASSES = {
  NextJS: "ring-white",
  Vite: "ring-indigo-600",
  JS: "ring-yellow-500 text-yellow-500",
  CSS: "ring-blue-500 text-blue-500",
  React: "ring-cyan-500",
  TypeScript: "ring-blue-600 text-blue-600",
  Recharts: "ring-green-500 text-green-500",
  Zustand: "ring-amber-400 text-amber-400",
  Shadcn: "ring-zinc-500 text-zinc-500",
  TailwindCSS: "ring-sky-500 text-blue-500",
  github: "ring-violet-700 text-purple-500",
  PostgreSQL: "ring-purple-600 text-violet-500",
  FastAPI: "ring-green-600 text-emerald-400",
  Zod: "ring-red-300 text-red-300",
  SQLAlchemy: "ring-cyan-500 text-cyan-500",
  default: "ring-gray-400",
} as const;

export type TBadgeType = keyof typeof ICONS;

type TNewBadge = {
  type: TBadgeType;
  className?: string;
};

export function NewBadge({ type, className }: TNewBadge) {
  const icon = ICONS[type];
  const ringClass =
    type in ICONS_CLASSES
      ? ICONS_CLASSES[type as keyof typeof ICONS_CLASSES]
      : ICONS_CLASSES.default;

  return (
    <Badge
      className={cn(
        "animate-pulse ring-1 ring-offset-1 min-w-14",
        ringClass,
        className,
      )}
    >
      {icon && (
        <Image src={icon} alt="" width={16} height={16} className="w-4 h-4" />
      )}
      <span className="capitalize">{type}</span>
    </Badge>
  );
}
