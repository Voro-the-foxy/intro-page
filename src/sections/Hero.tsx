import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-black relative">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <DotLottieReact
            src="/voro_2.lottie"
            autoplay
            loop
            style={{ width: 140, height: 140 }}
          />
        </div>

        <div className="inline-flex items-center gap-2 border border-black rounded-full px-4 py-1.5 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          AI-powered study assistant
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Study smarter,<br />not harder.
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
          Upload your lecture notes and let Voro generate quizzes, manage your schedule,
          and keep you on track for exam day — all in one place.
        </p>

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
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
