import { FadeIn } from '../components/FadeIn'
import { Smartphone, Tablet } from 'lucide-react'

const APK_URL = 'https://github.com/Voro-the-foxy/Voro/releases/latest/download/app-release.apk'

export function Download() {
  return (
    <section id="download" className="py-24 px-6 bg-paper text-black">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Get the app</h2>
            <p className="text-gray-500 text-lg">Download Voro and start your first session in under 3 minutes.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
          <FadeIn delay={100} className="h-full">
            <div className="h-full border-2 border-black rounded-sm p-8 sketch shadow-[3px_3px_0_0_rgba(0,0,0,1)] flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 border-2 border-black rounded-sm sketch flex items-center justify-center">
                <Smartphone size={32} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold mb-1">Android</h3>
                <p className="text-sm text-gray-500">Direct APK download — no Play Store needed.</p>
              </div>
              <a
                href={APK_URL}
                className="mt-auto w-full py-3 bg-black text-white text-sm border-2 border-black rounded-sm sketch shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-900 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-transform text-center"
              >
                Download APK →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="h-full">
            <div className="h-full border-2 border-black rounded-sm p-8 sketch shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] flex flex-col items-center text-center gap-4 opacity-50">
              <div className="w-16 h-16 border-2 border-black rounded-sm sketch flex items-center justify-center">
                <Tablet size={32} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold mb-1">iOS</h3>
                <p className="text-sm text-gray-500">TestFlight beta coming soon.</p>
              </div>
              <div className="mt-auto w-full py-3 bg-gray-100 text-gray-400 text-sm border-2 border-gray-300 rounded-sm text-center cursor-not-allowed select-none">
                Coming soon
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
