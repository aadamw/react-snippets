'use client'
import * as React from 'react'
import { motion, useMotionTemplate, useSpring } from 'framer-motion'

function useMouseMove() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 })

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = { maskImage, WebkitMaskImage: maskImage }

  return { onMouseMove, style }
}

export function MagicCardV2() {
  const { onMouseMove, style } = useMouseMove()

  return (
    <div onMouseMove={onMouseMove} className="overflow-hidden absolute inset-0 group">
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div className="absolute inset-0 z-10 bg-zinc-100/10 opacity-100 transition duration-1000" style={style} />
        <motion.div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000" style={style} />
      </div>
    </div>
  )
}
