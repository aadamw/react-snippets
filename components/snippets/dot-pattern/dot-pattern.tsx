export function DotPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/40 [mask-image:radial-gradient(250px_circle_at_center,white,transparent)]"
    >
      <defs>
        <pattern id=":r3d:" width="16" height="16" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x="0" y="0">
          <circle id="pattern-circle" cx="1" cy="1" r="1"></circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r3d:)"></rect>
    </svg>
  )
}
