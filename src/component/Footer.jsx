import React from "react";

function Footer() {
  return (
    <footer className="bg-[#021024] pt-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top panel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
          {/* Glows */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#5483B3]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#7DA0CA]/15 blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-[#5483B3] text-[#021024] font-extrabold flex items-center justify-center">
                  G
                </div>
                <div>
                  <p className="text-white font-extrabold text-lg">YourName</p>
                  <p className="text-white/60 text-sm">Web Developer • UI/UX</p>
                </div>
              </div>

              <p className="mt-4 text-white/65 text-sm leading-relaxed">
                I build modern, responsive web experiences with clean UI and strong
                attention to detail. Open to internships, freelance work, and collaborations.
              </p>

              {/* Social */}
              <div className="mt-5 flex flex-wrap gap-3">
                {["LinkedIn", "GitHub", "Behance", "Instagram"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 hover:bg-white/10 hover:text-[#C1E8FF] transition"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4">
              <h4 className="text-white font-extrabold">Quick Links</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {[
                  { label: "Home", href: "#" },
                  { label: "Services", href: "#services" },
                  { label: "Projects", href: "#projects" },
                  { label: "Education", href: "#education" },
                  { label: "Contact", href: "#contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <a className="hover:text-[#C1E8FF] transition" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter / Contact */}
            <div className="md:col-span-4">
              <h4 className="text-white font-extrabold">Stay Connected</h4>
              <p className="mt-4 text-sm text-white/65">
                Subscribe for updates or reach out directly via email.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex gap-3"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-white/10 bg-[#052659]/30 px-4 py-3 text-white placeholder:text-white/40 outline-none
                             focus:border-[#7DA0CA]/60 focus:ring-2 focus:ring-[#5483B3]/25 transition"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-[#5483B3] px-5 py-3 font-semibold text-[#021024] hover:bg-[#7DA0CA] transition"
                >
                  Subscribe
                </button>
              </form>

              <div className="mt-4 text-sm text-white/70">
                <p>
                  Email:{" "}
                  <a className="text-[#C1E8FF] hover:underline" href="mailto:yourname@email.com">
                    yourname@email.com
                  </a>
                </p>
                <p className="mt-1">Location: Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} YourName. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/55">
            <a href="#" className="hover:text-[#C1E8FF] transition">
              Privacy
            </a>
            <a href="#" className="hover:text-[#C1E8FF] transition">
              Terms
            </a>
            <a href="#top" className="hover:text-[#C1E8FF] transition">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
