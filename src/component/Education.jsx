import React, { useEffect, useRef, useState } from "react";

const EDUCATION = [
  {
    year: "2023 — Present",
    title: "BSc (Hons) Information Technology Specialising in Data Science",
    place: "Sri Lanka Institute of Information Technology (SLIIT)",
    desc: "Currently in Year 3 Semester 1 with a GPA above 3.6 throughout the degree programme. Recognised on the Dean’s List three times for achieving strong academic performance.",
    tags: ["Data Science", "Machine Learning", "Statistics", "Data Engineering"],
  },
  {
    year: "2022",
    title: "G.C.E Advanced Level — Physical Science Stream",
    place: "Mahamaya Girls' School, Kadawatha",
    desc: "Completed Advanced Level education in the Physical Science stream with a strong foundation in mathematics, analytical thinking, and problem solving.",
    tags: ["Combined Mathematics - C", "Physics - C", "Chemistry - S"],
  },
];

function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function Education() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-[#021024] py-16" id="education">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-white/60 text-sm">Qualifications</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            My <span className="text-[#7DA0CA]">Education</span>
          </h2>
          <p className="mt-3 text-white/65 max-w-2xl mx-auto">
            My academic journey in Data Science, analytics, and software development.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div
            className={[
              "lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              "transition-all duration-700",
            ].join(" ")}
          >
            <h3 className="text-xl font-extrabold text-white">Education Path</h3>
            <p className="mt-2 text-sm text-white/65">
              Building a strong foundation in data science, statistics, programming,
              databases, and business intelligence.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#052659]/40 p-4">
              <p className="text-xs text-white/60">Focus Areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Data Science", "Data Engineering", "Machine Learning", "Business Intelligence"].map((t) => (
                  <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5483B3]/80 via-white/10 to-[#5483B3]/10" />

              <div className="space-y-6">
                {EDUCATION.map((e, idx) => (
                  <EducationItem key={e.title} item={e} index={idx} show={inView} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationItem({ item, index, show }) {
  return (
    <div
      className={[
        "relative pl-14",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        "transition-all duration-700",
      ].join(" ")}
      style={{ transitionDelay: `${150 + index * 120}ms` }}
    >
      <div className="absolute left-[8px] top-6">
        <div className="h-5 w-5 rounded-full bg-[#5483B3] shadow-[0_0_0_6px_rgba(84,131,179,0.18)]" />
      </div>

      <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-[#C1E8FF]">{item.year}</p>
          <span className="text-xs rounded-full border border-white/10 bg-[#052659]/40 px-3 py-1 text-white/70">
            Education
          </span>
        </div>

        <h3 className="mt-3 text-xl font-extrabold text-white group-hover:text-[#C1E8FF] transition">
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-white/70">{item.place}</p>

        <p className="mt-4 text-sm text-white/65 leading-relaxed">{item.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/75">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;