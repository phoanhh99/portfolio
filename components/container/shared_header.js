import {SunIcon, MoonIcon, LoginIcon, MenuIcon} from '@heroicons/react/outline'
import cn from 'classnames'

import React, {useEffect, useState} from 'react'
import SharedSideBar from '~/components/container/shared_sidebar'

export default function SharedHeader(props) {
  const [mount, setMount] = useState(false)
  const {
    lightMode,
    darkMode,
    isPressed,
    handleAnimation,
    handlePress,
    theme,
    saveLocal,
  } = props
  useEffect(() => setMount(true), [])
  if (!mount) return null

  const loginBtn = cn(
    theme
      ? 'text-yellow-600 bg-gray-100 hover:text-gray-100 hover:bg-yellow-600'
      : 'bg-gray-800 text-yellow-300 hover:text-gray-800 hover:bg-yellow-600',
    'flex max-h-11 items-center p-3 w-full rounded-lg transition duration-300 ease-linear transform hover:scale-110'
  )

  return (
    <>
      <div className='flex flex-col sticky top-0 w-full z-10'>
        <div className='navbar mb-2 bg-base-200 shadow-md'>
          <div className='flex-none px-2 mx-2'>
            <h4 className='text-3xl lg:text-2xl font-bold'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-pink-500 '>
                Portfolio
              </span>
            </h4>
          </div>
          <div className='flex-auto px-2 mx-2'>
            <div className='items-stretch hidden lg:flex'>
              <a className='btn btn-ghost btn-sm rounded-btn'>Homepage</a>
              <a className='btn btn-ghost btn-sm rounded-btn'>Skillstack</a>
              <a className='btn btn-ghost btn-sm rounded-btn'>My CV</a>
            </div>
          </div>
          <div className='flex flex-none lg:hidden '>
            <button
              className='btn btn-square btn-sm sm:btn-md lg:btn-md btn-ghost'
              onClick={() => handlePress()}
            >
              <MenuIcon className='mx-1' />
            </button>
          </div>
          <div className='flex-none hidden lg:inline-flex'>
            <div className='mx-1 flex-nowrap w-max flex items-center'>
              <SunIcon
                className={cn('mx-1 h-7 w-7', lightMode)}
                fill={!theme ? '#F59E0B' : 'none'}
                onMouseEnter={() => handleAnimation('start', 'light')}
                onMouseLeave={() => handleAnimation('stop', 'light')}
              />
              <div className='form-control'>
                <input
                  type='checkbox'
                  className='toggle toggle-lg toggle-primary'
                  onChange={e => saveLocal(e.currentTarget.checked)}
                  checked={!!theme}
                />
              </div>
              <MoonIcon
                className={cn('mx-1 h-7 w-7', darkMode)}
                fill={theme ? '#F59E0B' : 'none'}
                onMouseEnter={() => handleAnimation('start', 'dark')}
                onMouseLeave={() => handleAnimation('stop', 'dark')}
              />
            </div>
            <div className='mx-1 flex-grow-0'>
              <button className={loginBtn}>
                <span className='mr-3'>Sign in</span>
                <LoginIcon className='h-7 w-7' transform='rotate(180)' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <SharedSideBar
        theme={theme}
        isPressed={isPressed}
        handlePress={handlePress}
        toggleTheme={saveLocal}
      />
    </>
  )
}
