import * as React from 'react'
import { ArrowRightUp } from './icons'

type Technology = {
  name: string
  href: string
}

type CardProps = {
  children: React.ReactNode
  title: string
  description: string
  technologies: Technology[]
}

export function Card(props: CardProps) {
  return (
    <article className="border border-[hsla(0,0%,100%,0.14)] p-4 rounded-xl">
      <div>
        <h2>{props.title}</h2>
        <span className="text-xs text-white/60">{props.description}</span>
      </div>
      <div className="py-8 flex justify-center">{props.children}</div>
      <footer className="text-sm text-white/60">
        <ul className="flex flex-wrap gap-1">
          {props.technologies.map(tech => (
            <li key={tech.name}>
              <a
                target="__blank"
                rel="noopener noreferrer"
                className="items-center flex gap-1 hover:underline underline-offset-2 hover:text-white"
                href={tech.href}
              >
                {tech.name}
                <ArrowRightUp className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  )
}
