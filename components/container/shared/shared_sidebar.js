import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import {LoginIcon, XIcon} from '@heroicons/react/outline'
import {
  AcademicCapIcon,
  HomeIcon,
  IdentificationIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/solid'
import useEventHandlers from 'utils/hooks/useEventHandlers'

export default function SharedSideBar(props) {
  const {theme, isPressed, closeIt, toggleTheme} = props

  const customSpan = classNames(
    'text-sm md:text-base tracking-wide md:tracking-wider xl:tracking-widest',
    theme ? 'text-gray-100' : 'text-gray-600'
  )
  const customSVG = classNames(
    'h-7 w-7 p-1 md:h-8 md:w-8',
    theme ? 'text-base' : 'text-gray-600'
  )

  useEventHandlers('keydown', e => {
    const screen = document.getElementsByTagName('body')[0].offsetWidth
    if (e.keyCode === 27 && screen < 1024) {
      return closeIt()
    }
  })

  return (
    <>
      <div
        className={classNames(
          'bg-black  fixed inset-0 transition bg-opacity-40 duration-500 ease-in-out overflow-hidden',
          isPressed ? 'opacity-100 z-20 ' : 'opacity-0 z-0 pointer-events-none'
        )}
        onClick={() => closeIt()}
      />
      <div
        className={classNames(
          'fixed z-30 inset-y-0 right-0 h-full transform translate-x-full flex flex-col flex-none p-1 overflow-y-auto overscroll-contain  text-yellow-500 w-1/2 md:w-1/3 lg:w-1/5 transition duration-500 ease-bounce-in-out',
          theme ? 'bg-black' : 'bg-gray-200',
          isPressed && 'shadow-side--left transform translate-x-1'
        )}
      >
        <button
          className={classNames(
            'btn btn-circle btn-sm sm:btn-md xl:btn-lg btn-ghost self-end',
            theme ? ' text-gray-200' : 'text-black'
          )}
          onClick={() => closeIt()}
        >
          <XIcon className={classNames('mx-1 h-8 w-8')} />
        </button>
        <ul className='menu h-full'>
          <li className='my-1'>
            <Link href='/' replace>
              <a className='btn btn-ghost btn-block  flex-1 justify-between'>
                <span className={customSpan}>Homepage</span>
                <HomeIcon className={customSVG} />
              </a>
            </Link>
          </li>
          <li className='my-1'>
            <Link href='/skillStack' replace>
              <a className='btn btn-ghost btn-block  flex-1 justify-between'>
                <span className={customSpan}>Skillstack</span>
                <AcademicCapIcon className={customSVG} />
              </a>
            </Link>
          </li>
          <li className='my-1'>
            <Link href='/skillStack' replace>
              <a className='btn btn-ghost btn-block  flex-1 justify-between'>
                <span className={customSpan}>My CV</span>
                <IdentificationIcon className={customSVG} />
              </a>
            </Link>
          </li>
          <li className='my-1'>
            <button
              className='btn btn-ghost btn-block flex-1  justify-between'
              onClick={() => toggleTheme(!theme)}
            >
              <span className={customSpan}>
                {theme ? 'Light mode' : 'Dark mode'}
              </span>
              {theme ? (
                <SunIcon className={customSVG} />
              ) : (
                <MoonIcon className={customSVG} />
              )}
            </button>
          </li>
          <li className='my-1'>
            <Link href='/' replace>
              <a className='btn btn-ghost btn-block  flex-1 justify-between'>
                <span className={customSpan}>Login</span>
                <LoginIcon className={customSVG} transform='rotate(180)' />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
