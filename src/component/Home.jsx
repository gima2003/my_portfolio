import React from "react";
import profileImg from "../assets/profile.png";

function Home() {
  return (
    <div className="min-h-screen bg-[#021024] text-white" id="top">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#5483B3]/25 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#7DA0CA]/20 blur-3xl" />
      </div>

      <div className="relative">
        <header className="mx-auto max-w-6xl px-6 pt-6">
          <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#5483B3] flex items-center justify-center font-bold">
                G
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Gimhani Pabodha</p>
                <p className="text-xs text-white/60">Portfolio</p>
              </div>
            </div>

            <ul className="hidden md:flex items-center gap-7 text-sm text-white/80">
              <li><a href="#top" className="hover:text-[#C1E8FF]">Home</a></li>
              <li><a href="#projects" className="hover:text-[#C1E8FF]">Projects</a></li>
              <li><a href="#education" className="hover:text-[#C1E8FF]">Education</a></li>
              <li><a href="#skills" className="hover:text-[#C1E8FF]">Skills</a></li>
              <li><a href="#contact" className="hover:text-[#C1E8FF]">Contact</a></li>
            </ul>

            <a
              href="#contact"
              className="rounded-xl bg-[#5483B3] px-4 py-2 text-sm font-semibold hover:bg-[#7DA0CA] transition"
            >
              Hire me
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-6 pt-12 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-white/70 mb-3">
                Hello, I'm{" "}
                <span className="text-[#C1E8FF] font-semibold">
                  Gimhani Pabodha
                </span>
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Data Scientist
                <span className="text-[#5483B3]"> +</span>
                <br />
                Data Engineer
              </h1>

              <p className="mt-5 text-white/70 max-w-xl">
                3rd-year Data Science undergraduate at SLIIT with experience in
                data analytics, ETL pipelines, statistical analysis, business
                intelligence, and full-stack development.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="/Gimhani_Pabodha_CV.pdf"
                  className="rounded-2xl bg-[#5483B3] px-6 py-3 font-semibold hover:bg-[#7DA0CA] transition"
                >
                  Download CV
                </a>
                <a
                  href="#projects"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10 transition"
                >
                  View Projects
                </a>
              </div>

              <div className="mt-7 flex items-center gap-3 text-white/70">
                <a href="https://www.linkedin.com/in/gimhani-pabodha-3b4755285/" target="_blank" className="social-icon">In</a>
                <a href="https://github.com/gimhani-pabodha" target="_blank" className="social-icon">gh</a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur">
                <div className="rounded-2xl bg-[#052659] border border-white/10 p-5">
                  <img
                    src={profileImg}
                    alt="Gimhani Pabodha"
                    className="h-56 w-full rounded-2xl object-cover border border-white/10"
                  />
                  <div className="mt-4">
                    <p className="text-sm text-white/60">Open to internships</p>
                    <p className="text-lg font-semibold">
                      Data Science • Analytics • Engineering
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Specialty</p>
                    <p className="font-semibold">Data Analytics</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Based in</p>
                    <p className="font-semibold">Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "3x", t: "Dean’s List\nAwards" },
              { k: "3.6+", t: "Current\nGPA" },
              { k: "6+", t: "Projects\nCompleted" },
              { k: "Year 3", t: "Data Science\nUndergraduate" },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition">
                <p className="text-2xl font-extrabold text-[#C1E8FF]">{s.k}</p>
                <p className="mt-2 text-sm text-white/70 whitespace-pre-line">{s.t}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;