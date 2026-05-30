export function CTA() {
  return (
    <section className="py-24 px-6 bg-black text-white text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to study smarter?
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Upload your first PDF and get your first quiz in under a minute.
        </p>
        <a
          href="https://voro-nine.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-100 transition-colors"
        >
          Try Voro for free →
        </a>
      </div>
    </section>
  )
}
