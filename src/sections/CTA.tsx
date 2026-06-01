import { FadeIn } from '../components/FadeIn'

export function CTA() {
  return (
    <section className="py-24 px-6 bg-black text-white text-center">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Start your 10-minute daily habit.
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Upload your first lecture PDF, set your study schedule,
            and take your first quiz — all in under 3 minutes.
          </p>
          <a
            href="https://voro-nine.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-paper text-black text-sm border-2 border-paper rounded-sm sketch shadow-[3px_3px_0_0_rgba(255,255,255,0.4)] hover:bg-paper-dark active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-transform"
          >
            Try Voro for free →
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
