const STACK = [
  { label: "Frontend", value: "React 19 + Vite + Tailwind CSS v4" },
  { label: "Backend", value: "Go 1.25 · Onion Architecture" },
  { label: "AI Server", value: "Python · FastAPI · Claude Sonnet" },
  { label: "Embeddings", value: "Voyage AI (voyage-3, 1024-dim)" },
  { label: "Database", value: "PostgreSQL 16 + pgvector" },
  { label: "Hosting", value: "Vercel + Railway" },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">About Voro</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Voro is a personal study assistant built for students who want to study more
              effectively with the materials they already have.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Instead of passively re-reading notes, Voro turns your PDFs into active
              recall sessions using AI-generated quizzes — powered by Anthropic's Claude
              and grounded entirely in your own content.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Built with a clean onion architecture on the backend and a mobile-first
              React SPA on the frontend. Designed to eventually ship as a native iOS
              and Android app via Capacitor.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/Voro-the-foxy/Voro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Source code
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-400 uppercase tracking-wider mb-4">Tech Stack</h3>
            <div className="flex flex-col gap-3">
              {STACK.map((s) => (
                <div key={s.label} className="flex items-start justify-between border-b border-gray-100 pb-3 last:border-0">
                  <span className="text-sm font-medium text-gray-400 w-28 shrink-0">{s.label}</span>
                  <span className="text-sm text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
