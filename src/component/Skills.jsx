import React from "react";

const SKILLS = [
  { name: "Figma", level: 92, icon: "figma" },
  { name: "Sketch", level: 80, icon: "sketch" },
  { name: "XD", level: 85, icon: "xd" },
  { name: "WordPress", level: 99, icon: "wp" },
  { name: "React", level: 89, icon: "react" },
  { name: "JavaScript", level: 93, icon: "js" },
];

function SkillIcon({ type }) {
  const cls = "h-11 w-11";
  switch (type) {
    case "figma":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="none">
          <rect x="22" y="6" width="20" height="20" rx="10" fill="#FF7262" />
          <rect x="22" y="22" width="20" height="20" rx="10" fill="#F24E1E" />
          <rect x="22" y="38" width="20" height="20" rx="10" fill="#A259FF" />
          <rect x="42" y="22" width="20" height="20" rx="10" fill="#1ABCFE" />
          <rect x="42" y="6" width="20" height="20" rx="10" fill="#0ACF83" />
        </svg>
      );
    case "sketch":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="none">
          <path d="M32 6 54 18 32 58 10 18 32 6Z" fill="#F7B500" />
          <path d="M32 6 54 18H10L32 6Z" fill="#FFD45C" opacity="0.9" />
          <path d="M10 18 32 58 54 18H10Z" fill="#F39C12" opacity="0.95" />
        </svg>
      );
    case "xd":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="none">
          <rect x="10" y="10" width="44" height="44" rx="10" fill="#2E001F" />
          <path
            d="M22 42 28 32 22 22h6l4 7 4-7h6l-6 10 6 10h-6l-4-7-4 7h-6Z"
            fill="#FF61F6"
          />
        </svg>
      );
    case "wp":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="26" fill="#0D2A4C" />
          <circle cx="32" cy="32" r="22" fill="#1E4E79" opacity="0.9" />
          <path
            d="M18 24c1 0 2 .6 2.4 1.6l9 24 4-12-3-8c-.3-.8.3-1.6 1.2-1.6h7c.9 0 1.5.9 1.2 1.7l-3 8 4 12 9-24c.3-1 1.3-1.6 2.4-1.6"
            stroke="#C1E8FF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "react":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="5" fill="#61DAFB" />
          <ellipse cx="32" cy="32" rx="22" ry="10" stroke="#61DAFB" strokeWidth="3" />
          <ellipse
            cx="32"
            cy="32"
            rx="22"
            ry="10"
            stroke="#61DAFB"
            strokeWidth="3"
            transform="rotate(60 32 32)"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="22"
            ry="10"
            stroke="#61DAFB"
            strokeWidth="3"
            transform="rotate(-60 32 32)"
          />
        </svg>
      );
    case "js":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="none">
          <rect x="10" y="10" width="44" height="44" rx="10" fill="#F7DF1E" />
          <path
            d="M28 44c1.8 3 6.5 2.7 6.5-1.1V26h5v17.4c0 7.2-9.6 9.3-13.5 2.7L28 44Zm18.5-1.8c1.3 2.2 6 2.6 6-.4 0-2.7-8.5-2.2-8.5-9 0-5.2 6.1-7.5 10.2-5.1l-1.6 3.6c-2-1.2-5.1-.8-5.1 1.3 0 2.8 8.5 2 8.5 9.1 0 6.1-8 7.5-12.2 3.3l2.7-2.8Z"
            fill="#111827"
          />
        </svg>
      );
    default:
      return <div className="h-11 w-11 rounded-2xl bg-white/10" />;
  }
}

function Skills() {
  return (
    <section className="py-16 bg-[#021024]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Outer dark panel (like the screenshot) */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 px-6 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          {/* Purple glow accents */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl" />

          {/* Title */}
          <div className="text-center relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              My <span className="text-[#7DA0CA]">Skills</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/65 max-w-2xl mx-auto">
              We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
            </p>
          </div>

          {/* Skills grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 relative">
            {SKILLS.map((s) => (
              <div
                key={s.name}
                className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur
                           hover:bg-white/10 hover:border-white/20 transition"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#052659]/60 border border-white/10
                                group-hover:scale-[1.03] transition">
                  <SkillIcon type={s.icon} />
                </div>

                <p className="mt-4 text-sm font-bold text-[#C1E8FF]">{s.level}%</p>
                <p className="mt-1 text-xs text-white/70">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
