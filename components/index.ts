import { Meteors } from './meteors/meteors'
import { VercelTabs } from './vercel-tabs/vercel-tabs'

export const SnippetComponents = [
  {
    id: 'Vercel-Tabs',
    title: 'Vercel Tabs',
    description: 'Tabs component from Nextjs conf',
    Component: VercelTabs,
    technologies: [
      { name: 'tailwindcss', href: 'https://tailwindcss.com/' },
      { name: 'radix-ui', href: 'https://www.radix-ui.com/' },
      { name: 'framer-motion', href: 'https://www.framer.com/motion/' },
    ],
  },
  {
    id: 'Meteors',
    title: 'Meteors',
    description: 'Card with meteors',
    Component: Meteors,
    technologies: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
]
