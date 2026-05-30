import { Bell, CheckCircle2, Flame, AlarmClock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'

const STATS = [
  {
    value: "50%",
    label: "better retention",
    detail: "Active recall outperforms passive re-reading by up to 50% in long-term memory studies.",
  },
  {
    value: "10–15 min",
    label: "optimal session length",
    detail: "Micro-learning sessions under 15 minutes match peak cognitive focus and minimize mental fatigue.",
  },
  {
    value: "4×",
    label: "faster mastery",
    detail: "Consistent short sessions spaced over time build knowledge 4× faster than massed practice (cramming).",
  },
]

interface NotificationType {
  icon: LucideIcon
  title: string
  description: string
}

const NOTIFICATION_TYPES: NotificationType[] = [
  {
    icon: Bell,
    title: "Before class",
    description: "A 10-minute heads-up before each lecture primes your brain for new material — you arrive ready to connect, not starting cold.",
  },
  {
    icon: CheckCircle2,
    title: "After class",
    description: "A quiz 10 minutes after class hits the memory consolidation window — when new content is still active and easiest to encode.",
  },
  {
    icon: Flame,
    title: "Exam mode",
    description: "During exam season Voro intensifies the cadence automatically — more frequent nudges, focused sessions, a daily countdown.",
  },
  {
    icon: AlarmClock,
    title: "Custom alarms",
    description: "Prefer studying at 11 PM? Set any alarm time. Voro delivers a quiz exactly when you want it, no schedule compromise needed.",
  },
]

export function WhyMicroLearning() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Why micro-learning works
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The science is clear: your brain retains information better through frequent, short practice sessions
              than through long, infrequent study marathons. Voro is built around this principle —
              and makes it effortless with smart, timely notifications.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {STATS.map((s, i) => (
            <FadeIn key={s.value} delay={i * 100}>
              <div className="text-center p-8 border border-black rounded-2xl h-full">
                <div className="text-5xl font-extrabold mb-2">{s.value}</div>
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{s.label}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{s.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mb-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Four ways Voro keeps you on track</h3>
            <p className="text-gray-500 max-w-xl mx-auto">
              Consistency is the hardest part of studying. Voro removes the friction by sending the right nudge at the right moment.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {NOTIFICATION_TYPES.map((n, i) => (
            <FadeIn key={n.title} delay={i * 90}>
              <div className="border border-black rounded-2xl p-6 bg-gray-50 h-full">
                <div className="mb-3 text-black">
                  <n.icon size={22} strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-sm mb-2">{n.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{n.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="border border-black rounded-2xl p-8 sm:p-12 bg-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-extrabold mb-4">
                  The problem with traditional studying
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Most students re-read their notes, highlight text, and re-watch lectures.
                  These feel productive but produce the weakest learning outcomes — your brain
                  is recognizing, not retrieving.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  When you can't recall an answer, that's your brain forming a stronger memory trace.
                  Each quiz forces retrieval practice — the most evidence-backed study technique available.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { method: "Re-reading notes", effect: "Weak", bar: "w-1/5", color: "bg-gray-300" },
                  { method: "Highlighting", effect: "Weak", bar: "w-1/4", color: "bg-gray-300" },
                  { method: "Summarizing", effect: "Moderate", bar: "w-2/5", color: "bg-gray-400" },
                  { method: "Spaced practice quizzes", effect: "Strong", bar: "w-full", color: "bg-black" },
                ].map((item) => (
                  <div key={item.method}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{item.method}</span>
                      <span className="text-gray-400">{item.effect}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.bar} ${item.color}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
