import * as React from 'react'
import { ArrowRightUp } from './icons'
import { Link } from './snippets'

type CardProps = {
  children: React.ReactNode
  title: string
  href?: string
  description: string
  links?: Array<Link>
}

export function Card(props: CardProps) {
  return (
    <article className="min-h-[210px] focus-within:bg-zinc-800/50 border relative overflow-hidden w-full grid grid-rows-[max-content,minmax(0,1fr),max-content] border-[hsla(0,0%,100%,0.14)] p-4 rounded-xl">
      {props.href ? (
        <a href={props.href} target="__blank" className="absolute top-4 right-4">
          <ArrowRightUp className="w-4 h-4" />
        </a>
      ) : null}
      <div>
        <h2>{props.title}</h2>
        <span className="text-xs text-white/60">{props.description}</span>
      </div>
      <div className="py-8 flex justify-center items-center">{props.children}</div>
      <footer className="text-sm text-white/60 z-20">
        <ul className="flex flex-wrap gap-1">
          {props.links?.map(link => (
            <li key={link.name}>
              <a
                target="__blank"
                rel="noopener noreferrer"
                className="items-center flex gap-1 hover:underline underline-offset-2 hover:text-white"
                href={link.href}
              >
                {link.name}
                <ArrowRightUp className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  )
}
