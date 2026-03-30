import { createFileRoute, Link } from '@tanstack/react-router'
import { marked } from 'marked'

import { allPosts } from 'content-collections'

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({ params }) => {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) {
      throw new Error('Post not found')
    }
    return post
  },
  component: RouteComponent,
})

function RouteComponent() {
  const post = Route.useLoaderData()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="text-sm text-amber-400 hover:text-amber-300 mb-6 inline-block"
      >
        &larr; Back to all articles
      </Link>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.categories.map((cat) => (
          <Link
            key={cat}
            to="/category/$category"
            params={{ category: cat }}
            className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors"
          >
            {cat}
          </Link>
        ))}
        {(post as any).type && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 capitalize">
            {(post as any).type}
          </span>
        )}
      </div>
      <h1 className="text-4xl font-bold text-white mb-2">{post.title}</h1>
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
        <span>{post.date}</span>
        {(post as any).author && (
          <>
            <span>&middot;</span>
            <span>{(post as any).author}</span>
          </>
        )}
      </div>
      <p className="text-lg text-gray-400 mb-8 border-l-2 border-amber-500/40 pl-4">
        {post.summary}
      </p>
      <div
        className="prose prose-invert prose-amber max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-amber-400 prose-li:text-gray-300"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </div>
  )
}
