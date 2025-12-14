import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ariz Ahmad — Software Engineer",
  author: "Ariz Ahmad",
  description:
    "Software Engineer based in Atlanta, United States. Versatile software engineer with 6+ years building Android apps, ML models, full‑stack services, and data pipelines; delivers production systems that scale and drive measurable business outcomes.",
  lang: "en",
  siteLogo: "/ariz-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/ariz-ahmad/" },
    { text: "Github", href: "https://github.com/ariz-ahmad"},
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ariz Ahmad",
    specialty: "Software Engineer",
    summary:
    "Software Engineer based in Atlanta, United States. Versatile software engineer with 6+ years building Android apps, ML models, full‑stack services, and data pipelines; delivers production systems that scale and drive measurable business outcomes.",
    email: "ariz.ahmad.ds@gmail.com",
  },
  experience: [
    {
      company: "Microsoft",
      position: "Software Engineer",
      startDate: "Feb 2022",
      endDate: "Present",
      summary: [
        "Onboarded 15+ enterprise teams to OAP analytics platform, migrating 200+ TB of data workloads and achieving 40% reduction in query latency through optimized Spark configurations and columnar storage strategies.",
        "Built automated onboarding pipelines and self-service tooling using Python/Scala that reduced customer integration time from 2 weeks to 3 days, enabling 100+ successful production deployments.",
        "Developed AI-powered documentation assistant and intelligent troubleshooting tools using LLMs (OpenAI API/Azure OpenAI) that automated 60% of common onboarding queries and reduced support ticket resolution time by 50%.",
      ],
    },
    {
      company: "University of Florida",
      position: "Research Assistant",
      startDate: "Aug 2021",
      endDate: "Feb 2022",
      summary: [
        "Developed deep learning algorithms for protein structure prediction using CNNs and RNNs on large-scale PDB datasets, achieving 20% improvement in fold classification accuracy compared to traditional sequence-based methods.",
        "Built automated data preprocessing pipelines processing over 500,000 protein sequences from UniProt database, reducing manual data preparation time by 80% and enabling high-throughput computational analysis.",
      ],
    },
    {
      company: "Samsung Research Institute, India",
      position: "Android Developer",
      startDate: "Jul 2016",
      endDate: "Aug 2019",
      summary: [
        "Developed and optimized Android applications for Samsung Galaxy devices serving 50+ million users globally, implementing Samsung-specific features like S Pen integration and Knox security framework with 99.5% crash-free rate",
        "Enhanced application performance through memory optimization and efficient coding practices, achieving 30% faster app launch times and 25% reduction in battery consumption compared to previous versions across multiple device form factors",
      ],
  },
  ],
  projects: [
    {
      name: "Loc8r",
      summary: "Fullstack application using MongoDB, Express, Angular, and Node.js to list nearby places with Wi-Fi, including timings, locations and reviews.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "WhatsPackt",
      summary: "Android messaging application implementing real-time communication using WebSockets, data persistence, bcakup with Room and Firebase cloud storage.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "MCP Weather Server",
      summary: "Weather MCP server based on the AccuWeather REST API and integrated it to a travel agent for live weather data.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Ariz Ahmad, a passionate Software Developer with a knack for crafting seamless digital experiences. With a strong background in Android, Machine Learning and AI, as well as data engineering and DevOps technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications and pipelines that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/ariz-big.jpg",
  },
};

