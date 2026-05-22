import React from "react";
import profileImg from "../assets/profile.png";



function Home() {
  return (
    <div className="min-h-screen bg-[#021024] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#5483B3]/25 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#7DA0CA]/20 blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative">
        {/* NAVBAR */}
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
              <li className="hover:text-[#C1E8FF] cursor-pointer">Home</li>
              <li className="hover:text-[#C1E8FF] cursor-pointer">Services</li>
              <li className="hover:text-[#C1E8FF] cursor-pointer">Works</li>
              <li className="hover:text-[#C1E8FF] cursor-pointer">Resume</li>
              <li className="hover:text-[#C1E8FF] cursor-pointer">Skills</li>
              <li className="hover:text-[#C1E8FF] cursor-pointer">Contact</li>
            </ul>

            <button className="rounded-xl bg-[#5483B3] px-4 py-2 text-sm font-semibold hover:bg-[#7DA0CA] transition">
              Hire me
            </button>
          </nav>
        </header>

        {/* HERO */}
        <main className="mx-auto max-w-6xl px-6 pt-12 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-sm text-white/70 mb-3">
                I am <span className="text-[#C1E8FF] font-semibold">Your Name</span>
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Web Developer <span className="text-[#5483B3]">+</span>
                <br />
                UX Designer
              </h1>

              <p className="mt-5 text-white/70 max-w-xl">
                I build modern, responsive web experiences with React. Focused on clean UI,
                performance, and user-centered design.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-[#5483B3] px-6 py-3 font-semibold hover:bg-[#7DA0CA] transition">
                  Download CV
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10 transition">
                  View Portfolio
                </button>
              </div>

              {/* Social */}
              <div className="mt-7 flex items-center gap-3 text-white/70">
                {["in", "gh", "be", "ig"].map((x) => (
                  <div
                    key={x}
                    className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-[#C1E8FF] transition cursor-pointer"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Profile card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur">
                <div className="rounded-2xl bg-[#052659] border border-white/10 p-5">
                   <img
                        src={profileImg}
                        alt="Gimhani Pabodha"
                        className="h-56 w-full rounded-2xl object-cover border border-white/10"
                      />
                  <div className="mt-4">
                    <p className="text-sm text-white/60">Available for freelance</p>
                    <p className="text-lg font-semibold">Let’s build something great.</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Specialty</p>
                    <p className="font-semibold">React UI</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Based in</p>
                    <p className="font-semibold">Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "14", t: "Years of\nExperience" },
              { k: "50+", t: "Projects\nCompleted" },
              { k: "1.5K", t: "Happy\nClients" },
              { k: "14", t: "Awards\nWon" },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition"
              >
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
