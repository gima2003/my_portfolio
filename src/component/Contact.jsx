import React from "react";

function Contact() {
  return (
    <section className="bg-[#021024] py-16" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm text-white/60">Get in touch</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            Contact <span className="text-[#7DA0CA]">Me</span>
          </h2>
          <p className="mt-3 text-white/65 max-w-2xl mx-auto">
            Open to data science, data analyst, data engineering internships,
            academic collaborations, and project opportunities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard title="Email" value="gimhanipabodha05@gmail.com" />
          <ContactCard title="Phone" value="+94 70 117 3964" />
          <ContactCard title="Location" value="Kadawatha, Sri Lanka" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:gimhanipabodha05@gmail.com"
            className="rounded-2xl bg-[#5483B3] px-6 py-3 font-semibold text-[#021024] hover:bg-[#7DA0CA] transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/gimhani-pabodha-3b4755285/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/80 hover:bg-white/10 hover:text-[#C1E8FF] transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/gima2003"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/80 hover:bg-white/10 hover:text-[#C1E8FF] transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ title, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur hover:bg-white/10 transition">
      <p className="text-sm text-white/60">{title}</p>
      <p className="mt-2 text-white font-semibold">{value}</p>
    </div>
  );
}

export default Contact;