import {MenuIcon, MoonIcon, SunIcon} from '@heroicons/react/outline'
import cn from 'classnames'
import Link from 'next/link'
import React, {useContext} from 'react'
import SharedSideBar from '~/components/container/shared/shared_sidebar'
import useAuth from '~/utils/hooks/useAuth'
import useOpenSidebar from '~/utils/hooks/useOpenSidebar'
import {ThemeContext} from '../../layout/layout'
import LoginSection from './loginSection'
import UserSection from './userSection'

export default function SharedHeader() {
  const {isPressed, openIt, closeIt} = useOpenSidebar()
  const {theme, saveLocal} = useContext(ThemeContext)
  const {profile} = useAuth()

  return (
    <>
      <nav className='flex flex-col sticky top-0 drop-shadow-lg w-full z-10 min-h-16 max-h-32'>
        <div className='navbar bg-base-100 h-28'>
          <div className='flex-none px-2 mx-2'>
            <h4 className='text-3xl lg:text-2xl font-bold'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-pink-500 select-none '>
                Portfolio
              </span>
            </h4>
          </div>
          <div className='flex-auto px-2 mx-2'>
            <div className='items-stretch hidden lg:flex'>
              <Link href='/' replace>
                <a className='btn btn-ghost btn-sm rounded-btn'>Homepage</a>
              </Link>
              <Link href='/SkillStack' replace>
                <a className='btn btn-ghost btn-sm rounded-btn'>Skillstack</a>
              </Link>
              <a className='btn btn-ghost btn-sm rounded-btn'>My CV</a>
            </div>
          </div>
          <div className='flex flex-none lg:hidden '>
            <button
              className='btn btn-square btn-sm sm:btn-md lg:btn-md btn-ghost'
              onClick={() => openIt()}
            >
              <MenuIcon className='mx-1 pointer-events-none' />
            </button>
          </div>
          <div className='flex-none hidden lg:inline-flex'>
            <div className='mx-1 flex-nowrap w-max flex items-center'>
              <SunIcon
                className={cn('mx-1 h-7 w-7')}
                fill={!theme ? '#F59E0B' : 'none'}
              />
              <div className='form-control'>
                <input
                  type='checkbox'
                  className='toggle toggle-lg toggle-primary'
                  onChange={e => saveLocal(e.currentTarget.checked)}
                  checked={theme}
                />
              </div>
              <MoonIcon
                className={cn('mx-1 h-7 w-7')}
                fill={theme ? '#F59E0B' : 'none'}
              />
            </div>
            {profile.isAuthenticated === true ? (
              <UserSection profile={profile} />
            ) : (
              <LoginSection theme={theme} />
            )}
          </div>
        </div>
      </nav>

      <SharedSideBar
        theme={theme}
        isPressed={isPressed}
        closeIt={closeIt}
        toggleTheme={saveLocal}
      />
    </>
  )
}
