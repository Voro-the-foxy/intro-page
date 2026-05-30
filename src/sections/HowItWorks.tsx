import { FadeIn } from '../components/FadeIn'

const STEPS = [
  {
    step: "01",
    title: "Set your timetable",
    description: "Enter your weekly class schedule. Voro uses it to automatically time your study nudges — before and after every lecture.",
  },
  {
    step: "02",
    title: "Upload & generate",
    description: "Upload your lecture PDF right after class. Voro processes it and generates a focused quiz in under a minute using Claude AI.",
  },
  {
    step: "03",
    title: "Get smart notifications",
    description: "Receive timely reminders — 10 min before class, 10 min after, intensified during exam season, or at any custom time you set. Micro-learning fits your schedule, not the other way around.",
  },
  {
    step: "04",
    title: "Quiz daily, improve steadily",
    description: "Take a short quiz each day. Review explanations, track your score history, and let spaced repetition handle the heavy lifting for exam prep.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">How micro-learning works with Voro</h2>
            <p className="text-gray-400 text-lg">10 minutes a day beats 10 hours the night before.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((s, i) => (
            <FadeIn key={s.step} delay={i * 120}>
              <div className="relative z-10">
                <div className="text-4xl font-extrabold text-gray-700 mb-4">{s.step}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
