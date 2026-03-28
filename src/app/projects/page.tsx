const projects = [
  {
    title: "AI Claims Processing Platform",
    subtitle: "Insurance workflow automation for veterinary claims",
    description:
      "Automates invoice digitization, coverage validation, and claim decisioning in one scalable backend platform. Handles end-to-end processing from document upload to payout routing with minimal human intervention.",
    stack: ["PHP", "AI Pipelines", "PDF Parsing", "MySQL", "Rule Engines"],
    gradient: "from-blue-600 to-indigo-700",
    dotColor: "bg-blue-400",
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Invoice Digitization Engine",
    subtitle: "Structured data extraction from real-world PDFs",
    description:
      "Extracts customer, vendor, pet, line items, and totals from veterinary invoices with strong reliability. Built for downstream integration with claims processing workflows and financial reconciliation.",
    stack: ["OCR", "Data Extraction", "Backend Processing", "Validation Logic"],
    gradient: "from-emerald-600 to-teal-700",
    dotColor: "bg-emerald-400",
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Fraud Detection System",
    subtitle: "Anomaly detection for claims and documents",
    description:
      "Flags suspicious logo, font, date, and document inconsistencies to support safer automated adjudication. Multi-layer risk scoring with configurable thresholds and human review integration.",
    stack: ["AI Checks", "Heuristics", "Risk Rules", "Document Analysis"],
    gradient: "from-red-600 to-orange-600",
    dotColor: "bg-red-400",
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Claim Engine",
    subtitle: "Instant eligibility and payout calculation",
    description:
      "Calculates refundable amounts at vet level in real time and supports routing to insurer or factoring workflows. Handles policy validation, deductibles, and financial logic at production scale.",
    stack: ["Business Rules", "APIs", "Policy Validation", "Financial Logic"],
    gradient: "from-purple-600 to-blue-600",
    dotColor: "bg-purple-400",
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,140,255,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="text-sm uppercase tracking-[0.2em] text-blue-300">Work</div>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Selected Projects</h1>
          <p className="mt-4 max-w-2xl text-slate-400 leading-7">
            Production systems built at VetControl — each solving a distinct problem in veterinary insurance claims automation.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Image / Thumbnail */}
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                {/* Dot grid pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-white/10" />
                <div className="absolute bottom-6 right-8 h-12 w-12 rounded-full bg-white/10" />
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 shadow-xl backdrop-blur-sm ring-1 ring-white/30">
                    {project.icon}
                  </div>
                </div>
                {/* Stack preview bar */}
                <div className="absolute bottom-0 left-0 right-0 flex gap-1.5 bg-gradient-to-t from-black/50 px-5 pb-4 pt-6">
                  {project.stack.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                    <p className="mt-1 text-sm text-blue-300">{project.subtitle}</p>
                  </div>
                  <div className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${project.dotColor}`} />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-slate-400">Interested in working together on a project like these?</p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-2xl bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
