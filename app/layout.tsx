import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import './globals.css'

export const metadata: Metadata = {
  title: 'React UI Snippets',
  description: 'React UI Snippets by Adam',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} font-sans text-white bg-zinc-900`}>{children}</body>
    </html>
  )
}
