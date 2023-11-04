import { ConfirmButton } from './confirm-button/confirm-button'
import { DotPattern } from './dot-pattern/dot-pattern'
import { GridPattern } from './grid-pattern/grid-pattern'
import { Spotlight } from './spotlight/spotlight'
import { MagicCard } from './magic-card/magic-card'
import { MarqueeDemo } from './marquee/marquee'
import { Meteors } from './meteors/meteors'
import { PendingButton } from './pending-button/pending-button'
import { RaunoGridDemo } from './rauno-grid/rauno-grid'
import { VercelTabs } from './vercel-tabs/vercel-tabs'

export type Link = {
  name: string
  href: string
}

type SnippetComponent = {
  id: string
  title: string
  description: string
  Component: React.FC
  links?: Array<Link>
}

export const SnippetComponents = [
  {
    id: 'Vercel-Tabs',
    title: 'Vercel Tabs',
    description: 'Tabs component from Nextjs conf',
    Component: VercelTabs,
    links: [
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
    links: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Rauno-Grid',
    title: 'Rauno Grid',
    description: 'Grid from rauno.me',
    Component: RaunoGridDemo,
    links: [
      { name: 'tailwindcss', href: 'https://tailwindcss.com/' },
      { name: 'rauno.me', href: 'https://rauno.me/' },
    ],
  },
  {
    id: 'Marquee',
    title: 'Marquee',
    description: 'Marquee with animation',
    Component: MarqueeDemo,
    links: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Spotlight',
    title: 'Spotlight',
    description: 'Card with spotlight animation',
    Component: Spotlight,
    links: [
      { name: 'tailwindcss', href: 'https://tailwindcss.com/' },
      { name: 'framer-motion', href: 'https://www.framer.com/motion/' },
    ],
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
    links: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Dot-Pattern',
    title: 'Dot Pattern',
    description: 'Pattern with dots',
    Component: DotPattern,
    links: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Grid-Pattern',
    title: 'Grid Pattern',
    description: 'Pattern with grid',
    Component: GridPattern,
    links: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
] satisfies Array<SnippetComponent>
