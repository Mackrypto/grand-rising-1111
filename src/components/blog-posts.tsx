import { Link } from '@tanstack/react-router'

import { type Post } from 'content-collections'

export default function BlogPosts({
  title,
  posts,
  description,
}: {
  title: string
  posts: Post[]
  description?: string
}) {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        {description && (
          <p className="mt-3 text-lg text-gray-400">{description}</p>
        )}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((post) => (
          <Link
            to="/posts/$slug"
            params={{ slug: post.slug }}
            key={post._meta.path}
            className="group block rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-amber-500/40 hover:bg-gray-900/80 transition-all"
          >
            <article>
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400"
                  >
                    {cat}
                  </span>
                ))}
                {(post as any).type && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 capitalize">
                    {(post as any).type}
                  </span>
                )}
              </div>
              <h2 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              <p className="mt-3 text-sm text-gray-400 line-clamp-3">
                {post.summary}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
