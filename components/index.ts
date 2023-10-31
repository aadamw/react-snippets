import { ConfirmButton } from './confirm-button/confirm-button'
import { Meteors } from './meteors/meteors'
import { PendingButton } from './pending-button/pending-button'
import { VercelTabs } from './vercel-tabs/vercel-tabs'

export type Technology = {
  name: string
  href: string
}

type SnippetComponent = {
  id: string
  title: string
  description: string
  Component: React.FC
  technologies?: Array<Technology>
}

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
  },
  {
    id: 'Pending-button',
    title: 'Pending Button',
    description: 'Button with prolonged pending animation',
    Component: PendingButton,
  },
] satisfies Array<SnippetComponent>
