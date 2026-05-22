import React from "react";

function Footer() {
  return (
    <footer className="bg-[#021024] pt-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#5483B3]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#7DA0CA]/15 blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-[#5483B3] text-[#021024] font-extrabold flex items-center justify-center">
                  G
                </div>
                <div>
                  <p className="text-white font-extrabold text-lg">Gimhani Pabodha</p>
                  <p className="text-white/60 text-sm">
                    Data Science Undergraduate
                  </p>
                </div>
              </div>

              <p className="mt-4 text-white/65 text-sm leading-relaxed">
                Passionate about data analytics, data engineering, machine learning,
                and building data-driven solutions that create meaningful insights.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a href="https://linkedin.com/in/gimhani-pabodha" target="_blank" className="footer-link">
                  LinkedIn
                </a>
                <a href="https://github.com/gimhani-pabodha" target="_blank" className="footer-link">
                  GitHub
                </a>
              </div>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-extrabold">Quick Links</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {[
                  { label: "Home", href: "#top" },
                  { label: "Projects", href: "#projects" },
                  { label: "Education", href: "#education" },
                  { label: "Skills", href: "#skills" },
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

            <div className="md:col-span-4">
              <h4 className="text-white font-extrabold">Contact</h4>
              <p className="mt-4 text-sm text-white/65">
                Open to internship opportunities, collaborations, and data-focused
                projects.
              </p>

              <div className="mt-4 text-sm text-white/70">
                <p>
                  Email:{" "}
                  <a className="text-[#C1E8FF] hover:underline" href="mailto:gimhanipabodha05@gmail.com">
                    gimhanipabodha05@gmail.com
                  </a>
                </p>
                <p className="mt-1">Phone: +94 70 117 3964</p>
                <p className="mt-1">Location: Kadawatha, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} Gimhani Pabodha. All rights reserved.
          </p>
          <a href="#top" className="text-xs text-white/55 hover:text-[#C1E8FF] transition">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;