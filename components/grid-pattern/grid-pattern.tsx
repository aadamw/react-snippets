export function GridPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full fill-gray-400/30 stroke-gray-400/30 [mask-image:radial-gradient(250px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
    >
      <defs>
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse" x="-1" y="-1">
          <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
      <svg x="-1" y="-1" className="overflow-visible">
        <rect strokeWidth="0" width="39" height="39" x="201" y="161" />
        <rect strokeWidth="0" width="39" height="39" x="201" y="41" />
        <rect strokeWidth="0" width="39" height="39" x="321" y="81" />
        <rect strokeWidth="0" width="39" height="39" x="241" y="241" />
        <rect strokeWidth="0" width="39" height="39" x="401" y="201" />
        <rect strokeWidth="0" width="39" height="39" x="521" y="121" />
      </svg>
    </svg>
  )
}
