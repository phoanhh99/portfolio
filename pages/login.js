import React from 'react'
import Link from 'next/link'
import {
  MailIcon,
  LockClosedIcon,
  ArrowNarrowLeftIcon,
} from '@heroicons/react/solid'
import Header from 'next/head'
import {
  FacebookLoginButton,
  GithubLoginButton,
  DiscordLoginButton,
} from 'react-social-login-buttons'

import {signIn} from 'next-auth/react'
function Login() {
  return (
    <>
      <Header>
        <title>Login page</title>
      </Header>

      <div className='flex justify-center items-center min-h-screen min-w-screen bg-gradient-to-bl from-yellow-800 to-yellow-600 '>
        <div className='relative flex m-auto flex-col lg:flex-row h-min lg:h-1/3 md:w-2/3 xl:w-3/5 drop-shadow-md bg-white rounded-md animate-fade-in'>
          <Link href='/'>
            <a
              role={'button'}
              className='absolute inset-x-auto top-3 left-3 text-gray-900 lg:text-white font-semibold tracking-normal md:tracking-wider flex flex-1 flex-row lg:justify-center items-center cursor-pointer rounded-lg transition duration-300  ease-in-out p-2  md:backdrop-filter md:hover:backdrop-blur-lg hover:ring-2 lg:hover:ring-0 hover:ring-gray-900'
            >
              <ArrowNarrowLeftIcon className='h-10 w-7 mr-2.5 pointer-events-none' />{' '}
              Back to homepage
            </a>
          </Link>
          <div className='w-1/2 md:block hidden bg-login-background bg-cover bg-center bg-no-repeat'></div>
          <div className='w-full lg:w-1/2 py-8 px-5 lg:p-7 my-10 lg:my-24 drop-shadow-lg'>
            <div className='text-left font-sans'>
              <ul>
                <li>
                  <FacebookLoginButton onClick={() => signIn('facebook')} />
                </li>
                <li>
                  <GithubLoginButton onClick={() => signIn('github')} />
                </li>
                <li>
                  <DiscordLoginButton onClick={() => signIn('discord')} />
                </li>
              </ul>
              <div className='divider text-indigo-700 font-semibold uppercase'>
                Or
              </div>
              <h1 className='text-gray-800 text-3xl font-medium lg:text-center'>
                Sign in with traditional way
                <br />
                {/* <span className='p-1 text-gray-700 text-lg font-normal'>
                  Free forever. No payment needed.
                </span> */}
              </h1>
            </div>
            <form className='p-0 text-gray-700 font-mono text-lg'>
              <div className='mt-5 relative transition-colors focus-within:text-indigo-500'>
                <div className='absolute inset-y-0 left-0 mx-2 flex items-center justify-center'>
                  <MailIcon className='h-7 w-7 pointer-events-none' />
                </div>
                <input
                  type='email'
                  className='text-black placeholder-opacity-70 block w-full px-10 py-3 md:py-5 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-500 '
                  placeholder='EMAIL'
                  autoComplete='off'
                />
              </div>
              <div className='mt-5 relative transition-colors focus-within:text-blue-500'>
                <div className='absolute inset-y-0 left-0 mx-2 flex items-center justify-center '>
                  <LockClosedIcon className='h-7 w-7  pointer-events-none' />
                </div>
                <input
                  type='password'
                  className='text-black placeholder-opacity-70 block w-full  px-10 py-3 md:py-5 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-500  '
                  placeholder='PASSWORD'
                  autoComplete='off'
                />
              </div>
              <div className='mt-10'>
                <input
                  role='button'
                  type='submit'
                  value='CONTINUE'
                  className='py-3 lg:text-lg xl:text-2xl bg-gradient-to-r from-yellow-600 to-yellow-900 text-white w-full rounded transition-all transform hover:scale-105 hover:drop-shadow-xl cursor-pointer'
                />
              </div>
              <div className='mt-5 italic'>
                <h5>
                  Doesn&apos;t have an account?{' '}
                  <Link href='/signup'>
                    <a className='mr-2 underline'>Sign up</a>
                  </Link>
                  instead
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>
}

export default Login
