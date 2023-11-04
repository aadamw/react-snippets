import { Card } from '@/components/card'
import { SnippetComponents } from '@/components/snippets'
import { ArrowRightUp } from '@/components/icons'

function CreatedByLink() {
  return (
    <span className="text-sm text-white/60 flex gap-2">
      Created by{' '}
      <a href="https://twitter.com/__aadamw" target="__blank" className="items-center flex gap-1 hover:underline underline-offset-2 hover:text-white">
        @__aadamw
        <ArrowRightUp className="w-4 h-4" />
      </a>
    </span>
  )
}

export default function Home() {
  return (
    <main className="container mx-auto px-2 gap-4 py-10 min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-center flex-col items-center gap-2">
          <h1 className="font-medium text-center text-3xl">React UI Snippets</h1>
          <CreatedByLink />
        </div>
        <div className="grid mt-10 sm:grid-cols-2 gap-4 xl:grid-cols-3  xl:gap-6">
          {SnippetComponents.map(({ Component, ...component }) => (
            <Card key={component.id} title={component.title} links={component.links} description={component.description}>
              <Component />
            </Card>
          ))}
        </div>
      </div>
      <footer>
        <CreatedByLink />
      </footer>
    </main>
  )
}
