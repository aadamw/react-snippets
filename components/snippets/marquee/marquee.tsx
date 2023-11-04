type MarqueeProps = {
  children: React.ReactNode
  pauseOnHover?: boolean
}

function Marquee({ children, pauseOnHover = true }: MarqueeProps) {
  return (
    <div className={`group flex w-full overflow-hidden [--duration:40s] [--gap:1rem]`}>
      <div className={`${pauseOnHover ? 'group-hover:pause' : ''} flex w-max animate-marquee items-stretch gap-[var(--gap)]`}>
        {children}
        {children}
      </div>
    </div>
  )
}

export function MarqueeDemo() {
  const items = new Array(5).fill(true)
  return (
    <div className="mx-[-1rem]">
      <Marquee>
        {items.map((_, idx) => (
          <div key={idx} className="flex hover:bg-zinc-800/50 border items-center border-[hsla(0,0%,100%,0.14)] rounded-md p-2 gap-4">
            <div className="rounded-full w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <div className="flex min-w-0 text-xs flex-col select-none">
              <span>Follow</span>
              <span>@__aadamw</span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
