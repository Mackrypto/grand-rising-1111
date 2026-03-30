import { Link } from '@tanstack/react-router'

const categories = ['Historical Topics', 'Science', 'Biotechnology']

export default function Header() {
  return (
    <header className="bg-gray-950 text-white border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link to="/" className="group">
            <h1 className="text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Reclaimed Truths
            </h1>
            <p className="text-sm text-gray-400 mt-0.5">
              Black History &middot; Science &middot; Biotechnology
            </p>
          </Link>
          <nav className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                to="/category/$category"
                params={{ category: cat }}
                className="text-sm px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
