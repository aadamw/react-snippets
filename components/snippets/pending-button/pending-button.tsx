'use client'
import * as React from 'react'
import { Loader } from '../../icons'

async function sleep(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}

async function minDelay<T>(promise: Promise<T>, ms: number) {
  const [p] = await Promise.all([promise, sleep(ms)])

  return p
}

export function useDelaySubmit<T>(handleSubmit: () => Promise<T>, ms = 2000) {
  const [isPending, setIsPending] = React.useState(false)

  async function handleClick() {
    setIsPending(true)

    await minDelay(handleSubmit(), ms)

    setIsPending(false)
  }

  return [isPending, handleClick] as const
}

const delayedAlert = async () => {
  await sleep(2000)
  alert('Form submitted!')
}

export function PendingButton() {
  const [isPending, handleClick] = useDelaySubmit(delayedAlert)
  return (
    <button
      role={isPending ? 'progressbar' : 'button'}
      onClick={handleClick}
      className="border flex border-[hsla(0,0%,100%,0.14)] py-1.5 px-3 rounded-lg items-center"
    >
      <span className="text-sm">Submit</span>
      {isPending ? <Loader className="ml-2 animate-spin w-3 h-3" /> : null}
    </button>
  )
}
