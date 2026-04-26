export type ProjectData = {
  id: string;
  front: {
    src: string;
    title: string;
    description: string;
  };
  back: {
    techs: readonly string[];
    libs: readonly string[];
    resource: string;
    linkSite?: string;
    linkGit?: string;
  };
};

export const projectsData: Record<"pt" | "en", ProjectData[]> = {
  pt: [
    {
      id: "doce-ilusao",
      front: {
        src: "https://doce-ilusao-public-dev.s3.sa-east-1.amazonaws.com/landing/LoginScreen.PNG",
        description:
          "E-commerce com interface moderna e criativa com tecnologia avançada.",
        title: "Doce Ilusão",
      },
      back: {
        techs: [
          "Vite",
          "React",
          "TypeScript",
          "TailwindCSS",
          "Python",
          "FastAPI",
          "PostgreSQL",
        ],
        libs: ["Shadcn/ui", "Zustand", "Tanstack Query", "Zod"],
        resource:
          "Secure Payment_Real-Time Shipping Calculation_Subscriptions_Private Videos/PDFs_AWS Storage_Responsive",
        linkSite: "https://doceilusao.store",
        linkGit: "https://github.com/AndreCaue/magicShop",
      },
    },
    {
      id: "dashboard",
      front: {
        src: "https://doce-ilusao-public-dev.s3.sa-east-1.amazonaws.com/landing/Doceboards.PNG",
        description:
          "Ferramenta com o objetivo de metrificar dados de vendas, fluxo de transporte e estoque.",
        title: "Dashboard UI",
      },
      back: {
        techs: ["Vite", "React", "TailwindCSS"],
        libs: ["Recharts", "Shadcn/ui", "Framer Motion", "Tanstack Query"],
        resource:
          "Interactive charts_Real-time update_Dynamic filters_PDF/CSV Export_Responsive",
        linkSite: "https://doceilusao.store/examples/dashboard",
        linkGit: "https://github.com/AndreCaue/landing-page",
      },
    },
    {
      id: "landing-page",
      front: {
        src: "https://doce-ilusao-public-dev.s3.sa-east-1.amazonaws.com/landing/landing-page.PNG",
        description: "Landing page desenvolvida com Next.js e Framer Motion.",
        title: "Landing Page",
      },
      back: {
        techs: ["NextJS", "React", "TypeScript", "TailwindCSS"],
        libs: ["Framer Motion", "Lucide React"],
        resource:
          "SEO Optimized_Framer Motion Animations_Responsive Design_Modern UI",
        linkSite: "/",
        linkGit: "https://github.com/AndreCaue/landing-page",
      },
    },
    {
      id: "fdp",
      front: {
        src: "https://doce-ilusao-public-dev.s3.sa-east-1.amazonaws.com/landing/FDP.PNG",
        description:
          "Plataforma de transparência pública para visualização de votações de deputados brasileiros com dados oficiais da Câmara.",
        title: "Fiscalização de Parlamentares",
      },
      back: {
        techs: [
          "NextJS",
          "React",
          "TypeScript",
          "TailwindCSS",
          "Python",
          "FastAPI",
          "PostgreSQL",
        ],
        libs: [
          "Shadcn/ui",
          "React Flow",
          "Framer Motion",
          "SQLAlchemy",
          "Pandas",
          "Httpx",
        ],
        resource:
          "Vote Tracking_Political Data Visualization_Interactive Graphs_Filter by Date & Party_Deputy Profiles_Automatic Data Sync_Open Data Integration",
        linkSite: "",
        linkGit: "",
      },
    },
  ],
  en: [
    {
      id: "doce-ilusao",
      front: {
        src: "https://doce-ilusao-public-dev.s3.sa-east-1.amazonaws.com/landing/LoginScreen.PNG",
        description:
          "E-commerce with a modern, creative interface and advanced tech stack.",
        title: "Doce Ilusão",
      },
      back: {
        techs: [
          "Vite",
          "React",
          "TypeScript",
          "TailwindCSS",
          "Python",
          "FastAPI",
          "PostgreSQL",
        ],
        libs: ["Shadcn/ui", "Zustand", "Tanstack Query", "Zod"],
        resource:
          "Secure Payment_Real-Time Shipping Calculation_Subscriptions_Private Videos/PDFs_AWS Storage_Responsive",
        linkSite: "https://doceilusao.store",
        linkGit: "https://github.com/AndreCaue/magicShop",
      },
    },
    {
      id: "dashboard",
      front: {
        src: "https://doce-ilusao-public-dev.s3.sa-east-1.amazonaws.com/landing/Doceboards.PNG",
        description:
          "Management tool aimed at tracking sales, logistics flow, and inventory.",
        title: "Dashboard UI",
      },
      back: {
        techs: ["Vite", "React", "TailwindCSS"],
        libs: ["Recharts", "Shadcn/ui", "Framer Motion", "Tanstack Query"],
        resource:
          "Interactive charts_Real-time update_Dynamic filters_PDF/CSV Export_Responsive",
        linkSite: "https://doceilusao.store/examples/dashboard",
        linkGit: "https://github.com/AndreCaue/landing-page",
      },
    },
    {
      id: "landing-page",
      front: {
        src: "https://doce-ilusao-public-dev.s3.sa-east-1.amazonaws.com/landing/landing-page.PNG",
        description:
          "High-conversion landing page built with Next.js and Framer Motion.",
        title: "Landing Page",
      },
      back: {
        techs: ["NextJS", "React", "TypeScript", "TailwindCSS"],
        libs: ["Framer Motion", "Lucide React"],
        resource:
          "SEO Optimized_Framer Motion Animations_Responsive Design_Modern UI",
        linkSite: "/",
        linkGit: "https://github.com/AndreCaue/landing-page",
      },
    },
    {
      id: "fdp",
      front: {
        src: "https://doce-ilusao-public-dev.s3.sa-east-1.amazonaws.com/landing/FDP.PNG",
        description:
          "Public transparency platform to visualize how Brazilian deputies vote using official open data from the Chamber of Deputies.",
        title: "Oversight of Parliamentarians",
      },
      back: {
        techs: [
          "NextJS",
          "React",
          "TypeScript",
          "TailwindCSS",
          "Python",
          "FastAPI",
          "SQLite",
        ],
        libs: [
          "Shadcn/ui",
          "React Flow",
          "Framer Motion",
          "SQLAlchemy",
          "Pandas",
          "Httpx",
        ],
        resource:
          "Vote Tracking_Political Data Visualization_Interactive Graphs_Filter by Date & Party_Deputy Profiles_Automatic Data Sync_Open Data Integration",
        linkSite: "",
        linkGit: "",
      },
    },
  ],
};
