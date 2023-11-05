import { ConfirmButton } from './confirm-button/confirm-button'
import { DotPattern } from './dot-pattern/dot-pattern'
import { GridPattern } from './grid-pattern/grid-pattern'
import { Spotlight } from './spotlight/spotlight'
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
  href?: string
  description: string
  Component: React.FC
  links?: Array<Link>
}

export const SnippetComponents = [
  {
    id: 'Vercel-Tabs',
    title: 'Vercel Tabs',
    description: 'Tabs component from Nextjs conf',
    href: 'https://github.com/aadamw/react-snippets/blob/master/components/snippets/vercel-tabs/vercel-tabs.tsx',
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
    href: 'https://github.com/aadamw/react-snippets/blob/master/components/snippets/meteors/meteors.tsx',
    Component: Meteors,
    links: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Rauno-Grid',
    title: 'Rauno Grid',
    description: 'Grid from rauno.me',
    href: 'https://github.com/aadamw/react-snippets/blob/master/components/snippets/rauno-grid/rauno-grid.tsx',
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
    href: 'https://github.com/aadamw/react-snippets/blob/master/components/snippets/marquee/marquee.tsx',
    Component: MarqueeDemo,
    links: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Spotlight',
    title: 'Spotlight',
    description: 'Card with spotlight animation',
    href: 'https://github.com/aadamw/react-snippets/blob/master/components/snippets/spotlight/spotlight.tsx',
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
    href: 'https://github.com/aadamw/react-snippets/blob/master/components/snippets/confirm-button/confirm-button.tsx',
    Component: ConfirmButton,
  },
  {
    id: 'Pending-button',
    title: 'Pending Button',
    description: 'Button with prolonged pending animation',
    href: 'https://github.com/aadamw/react-snippets/blob/master/components/snippets/pending-button/pending-button.tsx',
    Component: PendingButton,
  },
  {
    id: 'Dot-Pattern',
    title: 'Dot Pattern',
    description: 'Pattern with dots',
    href: 'https://github.com/aadamw/react-snippets/blob/master/components/snippets/dot-pattern/dot-pattern.tsx',
    Component: DotPattern,
    links: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
  {
    id: 'Grid-Pattern',
    title: 'Grid Pattern',
    description: 'Pattern with grid',
    href: 'https://github.com/aadamw/react-snippets/blob/master/components/snippets/grid-pattern/grid-pattern.tsx',
    Component: GridPattern,
    links: [{ name: 'tailwindcss', href: 'https://tailwindcss.com/' }],
  },
] satisfies Array<SnippetComponent>
