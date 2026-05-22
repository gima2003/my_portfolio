import React, { useMemo, useState } from "react";
import BI from "../assets/BI.jpeg";
import ONE from "../assets/ONE.jpeg";
import AI from "../assets/AI.jpeg";
import dashboard from "../assets/dashboard.jpeg";

const CATEGORIES = [
  "All",
  "Web Development",
  "Mobile App",
  "Motion",
  "Graphic Design",
];

const PROJECTS = [
  {
    id: 1,
    title: "Flyer design",
    category: "Graphic Design",
    desc: "A modern flyer layout with strong typography and balanced composition.",
    // Replace these with your own images later
    image:
      BI,
  },
  {
    id: 2,
    title: "Banner design",
    category: "Graphic Design",
    desc: "High-impact banner design for campaigns and product launches.",
    image:
      ONE,
  },
  {
    id: 3,
    title: "Disk cover",
    category: "Graphic Design",
    desc: "Clean cover artwork with a premium dark aesthetic.",
    image:
      AI,
  },
  {
    id: 4,
    title: "Pattern design",
    category: "Graphic Design",
    desc: "Seamless repeating pattern system for brand consistency.",
    image:
      dashboard,
  },
  {
    id: 5,
    title: "Logo design",
    category: "Graphic Design",
    desc: "Minimal logo concept focused on clarity and recognition.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Animal pattern",
    category: "Graphic Design",
    desc: "Illustrated pattern study using organic shapes and rhythm.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },

  // Add a few “Web Development” examples so filtering looks real:
  {
    id: 7,
    title: "Portfolio Website",
    category: "Web Development",
    desc: "Responsive portfolio with modern UI and smooth interactions.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "E-commerce UI",
    category: "Web Development",
    desc: "Product grid + cart flow with clean, conversion-first layout.",
    image:
      "https://images.unsplash.com/photo-1557825835-70d97c4aa567?auto=format&fit=crop&w=1200&q=80",
  },
];

function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
  const list =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return list.slice(0, 6);
}, [active]);


  return (
    <section className="bg-[#021024] py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm text-white/60">Portfolio</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            My Latest <span className="text-[#7DA0CA]">Projects</span>
          </h2>
          <p className="mt-3 text-white/65 max-w-2xl mx-auto">
            A curated selection of work across design and development. Filter by
            category to explore.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  "border border-white/10",
                  isActive
                    ? "bg-[#5483B3] text-[#021024] shadow-[0_10px_30px_rgba(84,131,179,0.25)]"
                    : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5
                 shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover scale-[1.02] group-hover:scale-[1.08] transition-transform duration-700"
          loading="lazy"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-[#021024]/95 via-[#021024]/35 to-transparent" />

        {/* Small tag */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="text-lg font-extrabold text-white group-hover:text-[#C1E8FF] transition">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-white/65 leading-relaxed">
          {project.desc}
        </p>

        {/* CTA */}
        <button
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7DA0CA]
                     hover:text-[#C1E8FF] transition"
        >
          View details
          <span className="translate-x-0 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#5483B3]/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}

export default Projects;
