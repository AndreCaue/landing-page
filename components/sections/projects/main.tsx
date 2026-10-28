import FlipCard from "@/components/new/FlipCard";
import { Header } from "./parts/Header";
import { FrontCard } from "./parts/FrontCard";
import { BackCard } from "./parts/BackCard";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";

export default function Project() {
  const { language } = useLanguage();
  const currentProjects = projectsData[language];
  return (
    <>
      <Header />

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 font-mono text-sm mt-12">
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className={
              currentProjects.length % 2 !== 0 &&
              index === currentProjects.length - 1
                ? "md:col-span-2 md:w-1/2 md:mx-auto"
                : ""
            }
          >
            <FlipCard
              frontChildren={
                <FrontCard
                  src={project.front.src}
                  description={project.front.description}
                  title={project.front.title}
                />
              }
              backChildren={
                <BackCard
                  techs={project.back.techs}
                  libs={project.back.libs}
                  resource={project.back.resource}
                  linkSite={project.back.linkSite}
                  linkGit={project.back.linkGit}
                />
              }
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
