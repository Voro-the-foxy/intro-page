const FEATURES = [
  {
    icon: "📄",
    title: "Upload & Ingest",
    description:
      "Upload any PDF lecture material. Voro extracts the text, chunks it semantically, and stores it as vector embeddings for intelligent retrieval.",
  },
  {
    icon: "🤖",
    title: "AI Quiz Generation",
    description:
      "Claude generates multiple-choice questions grounded strictly in your material — no hallucinations, no off-topic content. Each question is validated for quality.",
  },
  {
    icon: "⏰",
    title: "Alarm & Schedule",
    description:
      "Set study alarms and manage your weekly class schedule. Never miss a session with configurable reminders.",
  },
  {
    icon: "🎓",
    title: "Exam Day Tracker",
    description:
      "Track upcoming exams by subject. Get notified ahead of time so you can plan your preparation without last-minute panic.",
  },
  {
    icon: "📊",
    title: "Attempt History",
    description:
      "Review every quiz you've taken. See your score, which questions you got wrong, and how you've improved over time.",
  },
  {
    icon: "📱",
    title: "Mobile First",
    description:
      "Designed for the phone you always have with you. Works as a web app today — native iOS and Android coming soon via Capacitor.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Everything you need to ace your exams</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From ingesting raw notes to drilling with AI-generated quizzes — Voro covers the full study loop.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="border border-black rounded-2xl p-6 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-shadow"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
