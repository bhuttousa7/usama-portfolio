export default function UsamaPortfolioUI() {
  const skills = {
    "Backend & Architecture": ["PHP", "System Design", "REST APIs", "Microservices", "Scalability"],
    "AI & Automation": ["Document AI", "Invoice Parsing", "Fraud Detection", "Decision Engines", "Human-in-the-loop Workflows"],
    Infrastructure: ["Docker", "CI/CD", "Server Management", "Deployment Pipelines", "Performance Optimization"],
    Databases: ["MySQL", "SQL Optimization", "Large-scale Data Processing", "Data Modeling"],
  };

  const projects = [
    {
      title: "AI Claims Processing Platform",
      subtitle: "Insurance workflow automation for veterinary claims",
      impact: "Automates invoice digitization, coverage validation, and claim decisioning in one scalable backend platform.",
      stack: ["PHP", "AI Pipelines", "PDF Parsing", "MySQL", "Rule Engines"],
    },
    {
      title: "Invoice Digitization Engine",
      subtitle: "Structured extraction from real-world veterinary invoices",
      impact: "Extracts customer, vendor, pet, line items, and totals from PDFs with strong reliability for downstream processing.",
      stack: ["OCR/Data Extraction", "Backend Processing", "Validation Logic"],
    },
    {
      title: "Fraud Detection System",
      subtitle: "Anomaly detection for claims and documents",
      impact: "Flags suspicious logo, font, date, and document inconsistencies to support safer automated adjudication.",
      stack: ["AI Checks", "Heuristics", "Risk Rules", "Document Analysis"],
    },
    {
      title: "Real-Time Claim Engine",
      subtitle: "Instant eligibility and payout calculation",
      impact: "Calculates refundable amounts at vet level in real time and supports routing to insurer or factoring workflows.",
      stack: ["Business Rules", "APIs", "Policy Validation", "Financial Logic"],
    },
  ];

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
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,140,255,0.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm text-blue-200">
                Senior Backend & AI Engineer
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Building scalable backend and AI systems that solve real business problems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I design high-impact platforms for automation, claims processing, fraud detection, and real-time decision workflows — combining backend engineering, AI logic, and production-grade architecture.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5">
                  View Projects
                </a>
                <a href="#contact" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
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
                    Live Architecture Thinking
                  </div>
                </div>
                <div className="grid gap-3">
                  {[
                    "Invoice Upload",
                    "Data Extraction",
                    "Coverage Validation",
                    "Fraud Checks",
                    "Human Review",
                    "Payout Routing",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
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

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-blue-300">About</div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">A portfolio built around impact, systems, and ownership.</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-8">
            <p>
              This portfolio positions you as a senior engineer who goes beyond implementation. The layout emphasizes architecture, decision systems, business value, and technical ownership.
            </p>
            <p>
              Instead of a generic developer portfolio, this UI is designed to present you as someone who can lead backend systems, build AI-assisted products, and own critical infrastructure end-to-end.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-blue-300">Projects</div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Selected work</h2>
          </div>
          <p className="max-w-2xl text-slate-400">
            Project cards focus on business impact first, then technical depth. This helps recruiters and technical leaders understand both your engineering quality and your product value.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-blue-200">{project.subtitle}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 px-3 py-2 text-xs text-slate-300">
                  Case Study
                </div>
              </div>
              <p className="mt-5 text-slate-300 leading-7">{project.impact}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
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

      <section id="skills" className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.2em] text-blue-300">Skills & Tech</div>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Technology knowledge presented clearly</h2>
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Homepage goal",
              text: "Create a strong first impression with a high-trust hero section, visible seniority, and clear specialization.",
            },
            {
              title: "Project storytelling",
              text: "Show what problem was solved, what system was built, and why it mattered to the business.",
            },
            {
              title: "Design direction",
              text: "Minimal, premium, dark-mode-first, with subtle motion and architecture-inspired UI blocks.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[32px] border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-white/[0.04] to-emerald-500/10 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-blue-300">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Let's build systems that matter.</h2>
              <p className="mt-4 max-w-2xl text-slate-300 leading-8">
                Open to senior backend, AI engineering, or technical lead roles — especially in companies building complex, data-driven, or automated systems.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-slate-400">Email</div>
                  <div className="mt-1 text-white">bhuttousama7@gmail.com</div>
                </div>
                <div>
                  <div className="text-slate-400">LinkedIn</div>
                  <div className="mt-1 text-white">linkedin.com/in/bhuttousama</div>
                </div>
                <div>
                  <div className="text-slate-400">GitHub</div>
                  <div className="mt-1 text-white">github.com/bhuttousa7</div>
                </div>
                <div>
                  <div className="text-slate-400">Phone</div>
                  <div className="mt-1 text-white">+49 152 15287907</div>
                </div>
              </div>
              <button className="mt-6 w-full rounded-2xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5">
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
