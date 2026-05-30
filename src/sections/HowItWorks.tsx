const STEPS = [
  {
    step: "01",
    title: "Upload your notes",
    description: "Drop in a PDF of your lecture slides or textbook chapter. Voro processes and indexes the content automatically.",
  },
  {
    step: "02",
    title: "Generate a quiz",
    description: "Choose difficulty and question count. Claude reads your material and produces targeted multiple-choice questions — validated for accuracy.",
  },
  {
    step: "03",
    title: "Study & review",
    description: "Take the quiz, see your score, and review detailed explanations for each answer. Track your progress over time.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">How it works</h2>
          <p className="text-gray-400 text-lg">From PDF to quiz in under a minute.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <div key={s.step} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-5 left-full w-full h-px border-t border-dashed border-gray-600 -translate-x-4 z-0" />
              )}
              <div className="relative z-10">
                <div className="text-4xl font-extrabold text-gray-700 mb-4">{s.step}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
