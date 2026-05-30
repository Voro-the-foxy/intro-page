export function Footer() {
  return (
    <footer className="py-8 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-bold text-sm">voro</span>
        <span className="text-xs text-gray-400">© 2026 Voro the foxy. All rights reserved.</span>
        <a
          href="https://github.com/Voro-the-foxy/Voro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-black transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
