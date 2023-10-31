'use client'
import * as React from 'react'

function useMouseMove<El extends HTMLElement>() {
  const ref = React.useRef<El>(null)

  React.useEffect(() => {
    function mouseMoveEvent(e: MouseEvent) {
      const scale = window.visualViewport?.scale
      // disable mouse movement on viewport zoom - causes page to slow down
      if (scale === 1) {
        const body = document.body

        const { clientX, clientY } = e
        const { top, left } = ref.current?.getBoundingClientRect() || { top: 0, left: 0 }

        body.style.setProperty('--x', `${clientX - left}px`)
        body.style.setProperty('--y', `${clientY - top}px`)
      }
    }

    document.addEventListener('mousemove', mouseMoveEvent)
    return () => {
      document.removeEventListener('mousemove', mouseMoveEvent)
    }
  }, [])

  return ref
}

export function MagicCard() {
  const ref = useMouseMove<HTMLDivElement>()

  return (
    <div ref={ref} className="absolute inset-0">
      <div className="bg-gradient-to-r from-[#31996a] from-10% to-[#96320c] rotate-45 to-60%  absolute left-[--x] top-[--y] z-[-1] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl pointer-events-none" />
    </div>
  )
}
