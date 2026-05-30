import { FileText, Bot, Bell, BookOpen, AlarmClock, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: FileText,
    title: "Upload Your Lecture Materials",
    description:
      "Drop in a PDF right after class and Voro indexes every page. Every quiz question is drawn strictly from your own notes — no hallucinations, no off-topic content.",
  },
  {
    icon: Bot,
    title: "AI Quiz Generation",
    description:
      "Claude reads your lecture slides and generates focused multiple-choice questions in under a minute. Grounded in your content, validated for accuracy and clarity.",
  },
  {
    icon: Bell,
    title: "Before & After Class Alerts",
    description:
      "Voro reads your timetable and fires a quiz nudge 10 minutes before class to prime your memory, and again 10 minutes after to lock in what you just learned.",
  },
  {
    icon: BookOpen,
    title: "Exam-Mode Intensity",
    description:
      "Mark an upcoming exam and Voro shifts into high gear — more frequent reminders, targeted review sessions, and a daily countdown so you never cram the night before.",
  },
  {
    icon: AlarmClock,
    title: "Custom Study Alarms",
    description:
      "Night owl or early bird? Set alarms at any time you choose. Voro pings you when you're ready — not when a generic calendar says so.",
  },
  {
    icon: BarChart3,
    title: "Track Your Progress",
    description:
      "Every quiz attempt is saved. Review your score history, identify weak spots, and watch your retention improve session by session.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">The full micro-learning loop, in one app</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Upload → generate → get notified → quiz → repeat. That's how lasting knowledge is built.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 80}>
              <div className="border border-black rounded-2xl p-6 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-shadow h-full">
                <div className="mb-4 text-black">
                  <f.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
