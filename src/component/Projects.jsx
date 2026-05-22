import React, { useMemo, useState } from "react";
import BI from "../assets/BI.jpeg";
import ONE from "../assets/ONE.jpeg";
import AI from "../assets/AI.jpeg";
import dashboard from "../assets/dashboard.jpeg";

const CATEGORIES = [
  "All",
  "Data Science",
  "Data Engineering",
  "Machine Learning",
  "Full-Stack",
  "Mobile App",
];

const PROJECTS = [
  {
    id: 1,
    title: "Data Warehousing & BI Solution",
    category: "Data Engineering",
    desc: "Designed a star schema data warehouse, built ETL pipelines using SSIS, created SSAS cubes, and developed Power BI dashboards for an online food ordering dataset.",
    tech: ["SSIS", "SSAS", "Power BI", "SQL Server", "Excel"],
    image: BI,
  },
  {
    id: 2,
    title: "Fake News Detection Platform",
    category: "Machine Learning",
    desc: "Built an NLP-based machine learning application to classify news articles as real or fake using TF-IDF vectorization and Logistic Regression.",
    tech: ["Python", "NLP", "Scikit-learn", "Streamlit", "TF-IDF"],
    image: AI,
  },
  {
    id: 3,
    title: "Statistical Analysis: Learning Engagement",
    category: "Data Science",
    desc: "Conducted an end-to-end statistical modelling study to analyze how learning engagement affects long-term knowledge retention using regression and hypothesis testing.",
    tech: ["Python", "Statistics", "Regression", "Data Visualization"],
    image: dashboard,
  },
  {
    id: 4,
    title: "Smart Campus 360",
    category: "Full-Stack",
    desc: "Developed a centralized campus resource management system with booking workflows, maintenance ticketing, role-based access control, and secure authentication.",
    tech: ["Spring Boot", "React.js", "MySQL", "GitHub Actions"],
    image: ONE,
  },
  {
    id: 5,
    title: "Ceylon Colony Web Application",
    category: "Full-Stack",
    desc: "Real client-based MERN stack web application for a Sri Lankan honey brand. Worked on product and inventory management with CRUD, search, filters, reports, and chatbot integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: BI,
  },
  {
    id: 6,
    title: "Ceylon Colony Android UI",
    category: "Mobile App",
    desc: "Designed and implemented Android mobile application interfaces for product browsing, product details, search, filter, and structured navigation flows.",
    tech: ["Android Studio", "Java", "XML", "Mobile UI"],
    image: ONE,
  },
];

function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.category === active);
  }, [active]);

  return (
    <section className="bg-[#021024] py-16" id="projects">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm text-white/60">Portfolio</p>

          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            My <span className="text-[#7DA0CA]">Projects</span>
          </h2>

          <p className="mt-3 text-white/65 max-w-2xl mx-auto">
            A collection of academic and real-world projects covering data science,
            business intelligence, machine learning, full-stack development, and
            mobile application interfaces.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => {
            const isActive = active === category;

            return (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  "border border-white/10",
                  isActive
                    ? "bg-[#5483B3] text-[#021024] shadow-[0_10px_30px_rgba(84,131,179,0.25)]"
                    : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover scale-[1.02] group-hover:scale-[1.08] transition-transform duration-700"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#021024]/95 via-[#021024]/45 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-extrabold text-white group-hover:text-[#C1E8FF] transition">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-white/65 leading-relaxed">
          {project.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-[#052659]/40 px-3 py-1 text-xs text-white/75"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#5483B3]/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}

export default Projects;