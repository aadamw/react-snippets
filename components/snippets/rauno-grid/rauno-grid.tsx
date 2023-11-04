'use client'

type RaunoGridProps = {
  colors: Array<string>
  gridCellSize: number
}

export function RaunoGrid({ gridCellSize = 80, ...props }: RaunoGridProps) {
  const items = new Array(100).fill(true)

  function getBackgroundColor() {
    return props.colors[Math.floor(Math.random() * props.colors.length)]
  }

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.setProperty('--transition', 'background 0ms ease')
    e.currentTarget.style.setProperty('--bgc', getBackgroundColor())
  }

  const onMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.setProperty('--transition', 'background 1s ease')
    e.currentTarget.style.setProperty('--bgc', 'transparent')
  }

  const style = { transition: 'opacity 250ms ease-out, var(--transition)', background: 'var(--bgc)' }
  const cellProps = { onMouseEnter, onMouseOut, style }

  return (
    <div
      className={`[--grid-cell-size:${gridCellSize}px] absolute inset-y-[-200px] inset-x-[-100px] grid grid-cols-[repeat(10,var(--grid-cell-size))] grid-rows-[repeat(10,var(--grid-cell-size))] w-full  skew-y-12 [--border:hsl(0_0%_93.0%_/_0.3)]`}
      style={{ transform: 'skewX(-48deg) skewY(14deg) scaleX(2) scale(0.446484375) rotate(0) translateZ(0)' }}
    >
      {items.map((_, i) => (
        <div key={i} className="border border-[var(--border)] border-t-0 border-r-0 grid grid-cols-2 grid-rows-2 h-20 w-20">
          <div className="border-r border-[var(--border)]" {...cellProps} />
          <div {...cellProps} />
          <div className="border-t border-r border-[var(--border)]" {...cellProps} />
          <div className="border-t border-[var(--border)]" {...cellProps} />
        </div>
      ))}
    </div>
  )
}

const colors = ['hsl(39 100% 57.0%)', 'hsl(151 55.0% 41.5%)', 'hsl(206 100% 50.0%)']

export function RaunoGridDemo() {
  return <RaunoGrid colors={colors} gridCellSize={80} />
}
