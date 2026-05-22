import React from "react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Python", "Java", "JavaScript", "C", "C++"],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "SQL Server"],
  },
  {
    title: "BI & Data Engineering",
    icon: "📊",
    skills: ["Power BI", "Excel", "SSIS", "SSAS", "ETL Pipelines", "OLAP"],
  },
  {
    title: "Data Science & Analytics",
    icon: "🧠",
    skills: [
      "Machine Learning",
      "Statistical Analysis",
      "Data Visualization",
      "Regression Analysis",
      "Hypothesis Testing",
      "NLP",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma"],
  },
];

function Skills() {
  return (
    <section className="py-16 bg-[#021024]" id="skills">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 px-6 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          
          {/* Glow Effects */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#5483B3]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#7DA0CA]/15 blur-3xl" />

          {/* Header */}
          <div className="text-center relative">
            <p className="text-sm text-white/60">
              Technical Expertise
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
              My <span className="text-[#7DA0CA]">Skills</span>
            </h2>

            <p className="mt-4 text-white/65 max-w-2xl mx-auto leading-relaxed">
              A combination of data science, analytics, software engineering,
              and full-stack development skills gained through academic and
              real-world projects.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition duration-300"
              >
                
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#052659] text-2xl border border-white/10">
                    {category.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-white">
                      {category.title}
                    </h3>

                    <p className="text-sm text-white/50">
                      {category.skills.length} Skills
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-[#052659]/40 px-4 py-2 text-sm text-white/80 hover:bg-[#5483B3]/20 hover:text-[#C1E8FF] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;