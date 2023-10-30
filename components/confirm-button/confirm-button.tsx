'use client'
import * as React from 'react'

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

function callAll<Args extends Array<unknown>>(...fns: Array<((...args: Args) => unknown) | undefined>) {
  return (...args: Args) => fns.forEach(fn => fn?.(...args))
}

export function useDoubleCheck() {
  const [doubleCheck, setDoubleCheck] = React.useState(false)

  function getButtonProps(props?: ButtonProps) {
    const onBlur: ButtonProps['onBlur'] = () => setDoubleCheck(false)

    const onClick: ButtonProps['onClick'] = doubleCheck
      ? props?.onClick
      : e => {
          e.preventDefault()
          setDoubleCheck(true)
        }

    const onKeyUp: ButtonProps['onKeyUp'] = e => {
      if (e.key === 'Escape') {
        setDoubleCheck(false)
      }
    }

    return {
      ...props,
      onClick,
      onBlur: callAll(onBlur, props?.onBlur),
      onKeyUp: callAll(onKeyUp, props?.onKeyUp),
    }
  }

  return { doubleCheck, getButtonProps }
}

export function ConfirmButton() {
  const dc = useDoubleCheck()

  return (
    <button
      className={`${dc.doubleCheck ? 'bg-red-500/50' : ''} border border-[hsla(0,0%,100%,0.14)] py-1.5 px-3 rounded-lg`}
      {...dc.getButtonProps({ type: 'submit', onClick: () => alert('You unfollowed user-abc!') })}
    >
      {dc.doubleCheck ? 'Are you sure?' : 'Unfollow'}
    </button>
  )
}
