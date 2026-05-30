export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100">
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
          className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          Open app
        </a>
      </div>
    </nav>
  )
}
