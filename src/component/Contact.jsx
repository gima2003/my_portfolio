import React, { useEffect, useRef, useState } from "react";

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

function Contact() {
  const { ref, inView } = useInView();
  const [status, setStatus] = useState({ type: "", msg: "" });

  function handleSubmit(e) {
    e.preventDefault();

    // Demo-only: show a professional confirmation.
    // Later we can connect EmailJS, Formspree, Firebase, etc.
    setStatus({ type: "success", msg: "Message ready. I’ll get back to you soon." });

    // Clear after a moment
    setTimeout(() => setStatus({ type: "", msg: "" }), 3500);
    e.target.reset();
  }

  return (
    <section className="bg-[#021024] py-16" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm text-white/60">Get in touch</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            Contact <span className="text-[#7DA0CA]">Me</span>
          </h2>
          <p className="mt-3 text-white/65 max-w-2xl mx-auto">
            Have a project idea, internship opportunity, or collaboration in mind?
            Send a message and I’ll respond as soon as possible.
          </p>
        </div>

        {/* Main */}
        <div
          ref={ref}
          className={[
            "mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700",
          ].join(" ")}
        >
          {/* LEFT: Contact info */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
              {/* Glow */}
              <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#5483B3]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#7DA0CA]/15 blur-3xl" />

              <h3 className="relative text-xl font-extrabold text-white">
                Contact Information
              </h3>
              <p className="relative mt-2 text-sm text-white/65">
                Prefer email or a quick call? Here are my direct details.
              </p>

              <div className="relative mt-7 space-y-4">
                <InfoRow
                  label="Email"
                  value="yourname@email.com"
                  hint="Best for project discussions"
                />
                <InfoRow
                  label="Phone"
                  value="+94 XX XXX XXXX"
                  hint="Available 9AM – 6PM"
                />
                <InfoRow
                  label="Location"
                  value="Sri Lanka"
                  hint="Remote / On-site (as needed)"
                />
              </div>

              {/* Social */}
              <div className="relative mt-7">
                <p className="text-sm font-semibold text-white">Social</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {["LinkedIn", "GitHub", "Behance", "Instagram"].map((s) => (
                    <button
                      key={s}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 hover:bg-white/10 hover:text-[#C1E8FF] transition"
                      type="button"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Small CTA card */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
              <p className="text-white/70 text-sm">Fast response</p>
              <p className="mt-1 text-white font-extrabold text-lg">
                Typically within 24 hours
              </p>
              <p className="mt-2 text-sm text-white/65">
                Clear requirements help me reply faster: project type, deadline, and budget (if any).
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
              <h3 className="text-xl font-extrabold text-white">Send a Message</h3>
              <p className="mt-2 text-sm text-white/65">
                Fill the form below. I’ll respond with next steps.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" placeholder="Your name" />
                  <Field label="Email Address" name="email" placeholder="your@email.com" type="email" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Subject" name="subject" placeholder="Project / Internship / Collaboration" />
                  <Field label="Phone (optional)" name="phone" placeholder="+94 ..." />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project idea, timeline, and what you need..."
                    className="w-full rounded-2xl border border-white/10 bg-[#052659]/30 px-4 py-3 text-white placeholder:text-white/40 outline-none
                               focus:border-[#7DA0CA]/60 focus:ring-2 focus:ring-[#5483B3]/25 transition"
                  />
                </div>

                {/* Status */}
                {status.msg && (
                  <div
                    className={[
                      "rounded-2xl px-4 py-3 text-sm border",
                      status.type === "success"
                        ? "bg-[#052659]/40 border-[#7DA0CA]/40 text-[#C1E8FF]"
                        : "bg-red-500/15 border-red-500/30 text-red-200",
                    ].join(" ")}
                  >
                    {status.msg}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 justify-between">
                  <p className="text-xs text-white/50">
                    By sending this message, you agree to be contacted back about your request.
                  </p>

                  <button
                    type="submit"
                    className="rounded-2xl bg-[#5483B3] px-6 py-3 font-semibold text-[#021024]
                               hover:bg-[#7DA0CA] transition shadow-[0_12px_30px_rgba(84,131,179,0.25)]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Optional: direct email button */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:yourname@email.com"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-[#C1E8FF] transition"
              >
                Email Me Directly
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-[#C1E8FF] transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-white mb-2">
        {label}
      </label>
      <input
        name={name}
        required={name !== "phone"}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-[#052659]/30 px-4 py-3 text-white placeholder:text-white/40 outline-none
                   focus:border-[#7DA0CA]/60 focus:ring-2 focus:ring-[#5483B3]/25 transition"
      />
    </div>
  );
}

function InfoRow({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#052659]/30 p-4">
      <p className="text-xs text-white/60">{label}</p>
      <p className="mt-1 text-white font-semibold">{value}</p>
      <p className="mt-1 text-xs text-white/55">{hint}</p>
    </div>
  );
}

export default Contact;
