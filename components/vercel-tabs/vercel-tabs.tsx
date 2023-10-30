'use client'
import * as Tabs from '@radix-ui/react-tabs'
import * as React from 'react'
import { motion } from 'framer-motion'

const tabs = [
  { id: '1', label: 'Pack A' },
  { id: '2', label: 'Pack B' },
  { id: '3', label: 'Pack C' },
]

export function VercelTabs() {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id)

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={tabId => setActiveTab(tabId)}
      className="inline-flex space-x-1 border border-[hsla(0,0%,100%,0.14)] rounded-full overflow-hidden p-1"
    >
      <Tabs.List>
        {tabs.map(tab => (
          <Tabs.Trigger
            value={tab.id}
            key={tab.id}
            className="data-[state=inactive]:text-white/60 data-[state=inactive]:hover:text-white relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2"
          >
            {activeTab === tab.id ? (
              <motion.span
                layoutId="tab"
                transition={{ type: 'ease', bounce: 0.2, duration: 0.3 }}
                className="bg-[hsla(0,0%,93%_,1)] rounded-full absolute inset-0 z-10 mix-blend-difference"
              />
            ) : null}
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
