import { createFileRoute } from '@tanstack/react-router'

import { allPosts } from 'content-collections'

import BlogPosts from '@/components/blog-posts'

const categoryDescriptions: Record<string, string> = {
  'Historical Topics':
    'Exploring the true history of Black civilizations, stolen legacies, and the contributions that shaped the modern world.',
  Science:
    'Examining melanin science, debunking racial pseudoscience, and exploring what modern genetics reveals about human origins.',
  Biotechnology:
    'Investigating the documented history of government biotech programs, genetic editing, and their impact on Black communities.',
}

export const Route = createFileRoute('/category/$category')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const category = params.category
    const posts = allPosts.filter((post) => post.categories.includes(category))
    return { category, posts }
  },
})

function RouteComponent() {
  const { category, posts } = Route.useLoaderData()
  return (
    <BlogPosts
      title={category}
      posts={posts}
      description={categoryDescriptions[category]}
    />
  )
}
