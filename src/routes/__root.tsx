import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import Header from '@/components/Header'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Reclaimed Truths — Black History, Science & Biotechnology',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-gray-950 text-gray-100">
        <Header />
        <main>{children}</main>
        <footer className="border-t border-gray-800 py-8 mt-16">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>Reclaimed Truths &mdash; Exploring the history and science of who we are.</p>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
