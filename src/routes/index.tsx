import { createFileRoute, Link } from '@tanstack/react-router'

import { allPosts } from 'content-collections'

import BlogPosts from '@/components/blog-posts'

export const Route = createFileRoute('/')({
  component: App,
})

const categories = [
  {
    name: 'Historical Topics',
    description:
      'Ancient civilizations, stolen legacies, and the true history of Black peoples across the globe.',
  },
  {
    name: 'Science',
    description:
      'The biology of melanin, the debunking of racial pseudoscience, and what genetics really tells us.',
  },
  {
    name: 'Biotechnology',
    description:
      'Government programs, genetic editing, and the intersection of technology with Black communities.',
  },
]

function App() {
  return (
    <div>
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Reclaimed Truths
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the real history of Black people, challenging fictional
            science, and examining the documented connections between government
            programs and biotechnology.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Explore by Category
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/category/$category"
              params={{ category: cat.name }}
              className="block rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-amber-500/40 transition-all group"
            >
              <h3 className="text-lg font-semibold text-amber-400 group-hover:text-amber-300">
                {cat.name}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <BlogPosts
        title="Latest Articles"
        posts={allPosts}
        description="Editorial pieces, research articles, and investigations into Black history, science, and biotechnology."
      />
    </div>
  )
}
