import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { FadeIn } from '../components/FadeIn'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-black relative">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn delay={0}>
          <div className="flex items-end justify-center gap-3 mb-4">
            <DotLottieReact
              src="/voro_2.lottie"
              autoplay
              loop
              style={{ width: 110, height: 120 }}
            />
            <div className="relative mb-6">
              <div className="px-5 py-3 border border-black rounded-2xl">
                <span className="text-sm italic">Voro is here!</span>
              </div>
              <div className="absolute left-[-8px] bottom-3 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-black" />
              <div className="absolute left-[-6px] bottom-[13px] w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[9px] border-r-white" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 border border-black rounded-full px-4 py-1.5 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
            Micro-learning, powered by AI
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Small sessions.<br />Big results.
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
            Voro turns your lecture materials into short, focused quiz sessions —
            triggered by smart notifications before and after each class, during exam season,
            or whenever you choose. Micro-learning that fits into your day, every day.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://voro-nine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              Try Voro →
            </a>
            <a
              href="#features"
              className="px-8 py-3.5 border border-black text-black text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Learn more
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
