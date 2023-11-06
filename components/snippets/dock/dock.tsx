'use client'
import { useMotionValue, motion, type MotionValue, useTransform, useSpring, type HTMLMotionProps } from 'framer-motion'
import * as React from 'react'

type PossibleRef<T> = React.Ref<T> | undefined

function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref !== null && ref !== undefined) {
    ;(ref as React.MutableRefObject<T>).current = value
  }
}

function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach(ref => setRef(ref, node))
}

function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(composeRefs(...refs), refs)
}

type DockContextType = {
  mouseX: MotionValue<number>
}

const DockContext = React.createContext<DockContextType>({} as DockContextType)
const useDockContext = () => React.useContext(DockContext)

const DockRoot = React.forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(({ className, ...props }, ref) => {
  const mouseX = useMotionValue(Infinity)

  return (
    <DockContext.Provider value={{ mouseX }}>
      <motion.div ref={ref} onMouseMove={e => mouseX.set(e.pageX)} onMouseLeave={() => mouseX.set(Infinity)} className={className} {...props} />
    </DockContext.Provider>
  )
})
DockRoot.displayName = 'DockRoot'

const DockItem = React.forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(({ className, ...props }, forwardedRef) => {
  const { mouseX } = useDockContext()
  const ref = React.useRef<HTMLDivElement>(null)
  const composedRefs = useComposedRefs(forwardedRef, ref)

  const distance = useTransform(mouseX, val => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-100, 0, 100], [30, 60, 30])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 10 })

  return <motion.div ref={composedRefs} style={{ width }} className={className} {...props} />
})
DockItem.displayName = 'DockItem'

export { DockRoot, DockItem }

export function DockDemo() {
  const items = new Array(4).fill(true)
  return (
    <DockRoot className="mx-auto flex h-12 items-end gap-4 rounded-md bg-zinc-900 px-4 p-2 border border-[hsla(0,0%,100%,0.14)]">
      {items.map((_, i) => (
        <DockItem key={i} className="aspect-square w-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500" />
      ))}
    </DockRoot>
  )
}
