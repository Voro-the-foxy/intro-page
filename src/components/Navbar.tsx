export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-paper border-b-2 border-black sketch">
      <a href="/" className="font-extrabold text-lg tracking-tight">
        voro
      </a>
      <div className="flex items-center gap-6">
        <a href="#features" className="text-sm text-gray-500 hover:text-black transition-colors hidden sm:block">
          Features
        </a>
        <a
          href="https://voro-nine.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white text-sm rounded-sm border-2 border-black sketch shadow-[2px_2px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-900 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-transform"
        >
          Open app
        </a>
      </div>
    </nav>
  )
}
