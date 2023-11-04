'use client'
import * as React from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

function useMouseMove() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return {
    onMouseMove,
    mouse: {
      x: mouseX,
      y: mouseY,
    },
  }
}

export function Spotlight() {
  const { onMouseMove, mouse } = useMouseMove()

  return (
    <div onMouseMove={onMouseMove} className="overflow-hidden absolute inset-0 group">
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouse.x}px ${mouse.y}px,
              rgba(66, 70, 72, 0.15),
              transparent 80%
            )
          `,
        }}
      />
    </div>
  )
}
