import { ConfirmButton } from './confirm-button/confirm-button'
import { DotPattern } from './dot-pattern/dot-pattern'
import { GridPattern } from './grid-pattern/grid-pattern'
import { MagicCardV2 } from './magic-card-v2/magic-card-v2'
import { MagicCard } from './magic-card/magic-card'
import { MarqueeDemo } from './marquee/marquee'
import { Meteors } from './meteors/meteors'
import { PendingButton } from './pending-button/pending-button'
import { RaunoGridDemo } from './rauno-grid/rauno-grid'
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
    id: 'Rauno-Grid',
    title: 'Rauno Grid',
    description: 'Grid from rauno.me',
    Component: RaunoGridDemo,
    technologies: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Marquee',
    title: 'Marquee',
    description: 'Marquee with animation',
    Component: MarqueeDemo,
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
  {
    id: 'Magic-Card',
    title: 'Magic Card',
    description: 'Card with hover animation',
    Component: MagicCard,
    technologies: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Dot-Pattern',
    title: 'Dot Pattern',
    description: 'Pattern with dots',
    Component: DotPattern,
    technologies: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Grid-Pattern',
    title: 'Grid Pattern',
    description: 'Pattern with grid',
    Component: GridPattern,
    technologies: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Magic-Card-v2',
    title: 'Magic Card v2',
    description: 'Card with hover animation',
    Component: MagicCardV2,
    technologies: [
      { name: 'tailwindcss', href: 'https://tailwindcss.com/' },
      { name: 'framer-motion', href: 'https://www.framer.com/motion/' },
    ],
  },
] satisfies Array<SnippetComponent>
