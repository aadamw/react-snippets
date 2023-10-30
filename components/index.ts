import { ConfirmButton } from './confirm-button/confirm-button'
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
  {
    id: 'Confirm-button',
    title: 'Confirm Button',
    description: 'Button with double-click confirmation',
    Component: ConfirmButton,
    technologies: [],
  },
]
