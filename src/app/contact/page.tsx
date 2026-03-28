const contactLinks = [
  {
    label: "Email",
    value: "bhuttousama7@gmail.com",
    href: "mailto:bhuttousama7@gmail.com",
    description: "Best way to reach me for opportunities and collaborations.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bhuttousama",
    href: "https://linkedin.com/in/bhuttousama",
    description: "Connect with me professionally and see my full work history.",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/bhuttousa7",
    href: "https://github.com/bhuttousa7",
    description: "Browse my public repositories and open source contributions.",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    external: true,
  },
  {
    label: "Phone",
    value: "+49 152 15287907",
    href: "tel:+4915215287907",
    description: "Available for calls during European business hours (CET).",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    external: false,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,140,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.08),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="text-sm uppercase tracking-[0.2em] text-blue-300">Contact</div>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Let&apos;s build systems that matter.</h1>
          <p className="mt-4 max-w-xl text-slate-400 leading-7">
            Open to senior backend, AI engineering, or technical lead roles — especially in companies building complex, data-driven, or automated systems.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-5 rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-slate-300 transition group-hover:border-blue-400/30 group-hover:bg-blue-500/10 group-hover:text-blue-300">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-slate-500">{item.label}</div>
                <div className="mt-1 truncate text-base font-medium text-white">{item.value}</div>
                <p className="mt-1.5 text-sm text-slate-400">{item.description}</p>
              </div>
              <svg
                className="ml-auto mt-1 h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Availability banner */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-white/[0.03] to-blue-500/10 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-medium text-emerald-300">Available for opportunities</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Currently open to new roles.</h2>
              <p className="mt-2 max-w-lg text-slate-400 leading-7">
                Based in Germany, working CET hours. I&apos;m available for full-time positions, contract work, and consulting engagements.
              </p>
            </div>
            <a
              href="mailto:bhuttousama7@gmail.com"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-blue-500 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
            >
              Send me an email
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
