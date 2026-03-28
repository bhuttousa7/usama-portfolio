"use client";

export default function UsamaPortfolioUI() {
  const skills = {
    "Backend & Architecture": ["PHP", "System Design", "REST APIs", "Microservices", "Scalability"],
    "AI & Automation": ["Document AI", "Invoice Parsing", "Fraud Detection", "Decision Engines", "Human-in-the-loop Workflows"],
    Infrastructure: ["Docker", "CI/CD", "Server Management", "Deployment Pipelines", "Performance Optimization"],
    Databases: ["MySQL", "SQL Optimization", "Large-scale Data Processing", "Data Modeling"],
  };

  const experience = [
    {
      role: "Senior Backend & AI Engineer",
      company: "VetControl",
      period: "Oct 2023 – Present",
      points: [
        "Leading development of an AI-powered insurance claims platform",
        "Designing real-time claim calculation, coverage validation, and fraud detection workflows",
        "Driving backend architecture, deployment processes, and business-critical technical systems",
      ],
    },
    {
      role: "Backend Developer",
      company: "VetControl",
      period: "Apr 2022 – Oct 2023",
      points: [
        "Built and optimized backend services for veterinary data processing",
        "Improved large-scale synchronization and reduced unnecessary database load",
        "Contributed to reliable, scalable product foundations used in production workflows",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,140,255,0.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              {/* Profile */}
              <div className="mb-8 flex items-center gap-5">
                <div className="relative shrink-0">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-emerald-400 opacity-75 blur-sm" />
                  <img
                    src="/profile.jpg"
                    alt="Usama Bhutto"
                    className="relative h-20 w-20 rounded-full border-2 border-white/10 object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="relative hidden h-20 w-20 items-center justify-center rounded-full border-2 border-white/10 bg-gradient-to-br from-blue-500/30 to-emerald-500/20 text-2xl font-bold text-white">
                    UB
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-white">Usama Bhutto</div>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
                    <svg className="h-3.5 w-3.5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Germany
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <a
                      href="https://linkedin.com/in/bhuttousama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:text-blue-300 transition"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href="https://github.com/bhuttousa7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white transition"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Title badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/15 to-emerald-500/10 px-4 py-2 text-sm font-medium text-blue-200 shadow-lg shadow-blue-500/10 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Senior Backend & AI Engineer · 4+ Years
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Building scalable backend and AI systems that solve real business problems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I design high-impact platforms for automation, claims processing, fraud detection, and real-time decision workflows — combining backend engineering, AI logic, and production-grade architecture.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/projects" className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5">
                  View Projects
                </a>
                <a href="/contact" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
                  Contact Me
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ["Backend", "Scalable APIs"],
                  ["AI Workflows", "Document intelligence"],
                  ["Infrastructure", "Docker & deployment"],
                  ["Business Logic", "Claims & validation"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-sm font-medium text-white">{title}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-400">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[24px] border border-white/10 bg-slate-900 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400">System Snapshot</div>
                    <div className="text-lg font-semibold text-white">Claims Intelligence Platform</div>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Live Architecture
                  </div>
                </div>
                <div className="grid gap-3">
                  {["Invoice Upload", "Data Extraction", "Coverage Validation", "Fraud Checks", "Human Review", "Payout Routing"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-sm font-semibold text-blue-300">
                        {index + 1}
                      </div>
                      <div className="text-sm text-slate-200">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-blue-300">About</div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Engineering systems that go beyond just working.</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-8">
            <p>
              I&apos;m a Senior Backend &amp; AI Engineer with 4+ years of experience building production systems at the intersection of automation, AI, and complex business logic. Based in Germany, I work at VetControl where I lead the development of an AI-powered insurance claims platform for the veterinary industry.
            </p>
            <p>
              My focus is on systems that are not just functional, but reliable, scalable, and business-aware — from invoice digitization and fraud detection to real-time claim calculation and coverage validation. I own projects end-to-end: architecture decisions, backend implementation, deployment, and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.2em] text-blue-300">Experience</div>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Career progression</h2>
        </div>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.role} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-slate-300">{item.company}</p>
                </div>
                <div className="text-sm text-slate-400">{item.period}</div>
              </div>
              <ul className="mt-5 space-y-3 text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.2em] text-blue-300">Skills & Tech</div>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Tools & technologies</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{category}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {items.map((item) => (
                  <span key={item} className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[32px] border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-white/[0.04] to-emerald-500/10 p-10 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready to build something great?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300 leading-8">
            Open to senior backend, AI engineering, or technical lead roles — especially in companies building complex, data-driven, or automated systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/projects" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
              View My Projects
            </a>
            <a href="/contact" className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
