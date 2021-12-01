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
  GoogleLoginButton,
} from 'react-social-login-buttons'
import {getSession, signIn} from 'next-auth/react'

export async function getServerSideProps({req}) {
  const session = await getSession({req})
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
function Login() {
  const socialBtnCustom =
    'font-bold font-mono text-lg uppercase tracking-wide transition-transform  hover:scale-105 shadow-lg hover:shadow-xl'
  return (
    <>
      <Header>
        <title>Login page</title>
      </Header>

      <div className='flex justify-center items-center min-h-screen min-w-screen bg-gradient-to-bl from-yellow-800 to-yellow-600 '>
        <div className='relative flex m-auto flex-col lg:flex-row min-h-16 h-full lg:h-2/3 md:w-2/3 xl:w-4/5 shadow-md bg-white md:rounded-md animate-fade-in text-lg md:text-2xl'>
          <Link href='/'>
            <a
              role={'button'}
              className='absolute inset-x-auto top-3 left-3 text-gray-900 lg:text-white font-semibold tracking-normal md:tracking-wider flex flex-1 flex-row lg:justify-center items-center cursor-pointer rounded-lg transition duration-300  ease-in-out p-2  md:backdrop-filter md:hover:backdrop-blur-lg hover:ring-2 lg:hover:ring-0 hover:ring-gray-900'
            >
              <ArrowNarrowLeftIcon className='h-10 w-7 mr-2.5 pointer-events-none' />{' '}
              Back to homepage
            </a>
          </Link>
          <div className='w-1/2 md:block hidden xl:bg-login-background-xl md:bg-login-background-md bg-cover bg-center bg-no-repeat'></div>
          <div className='w-full lg:w-1/2 py-8 px-5 lg:p-7 my-10 lg:my-20'>
            <div className='text-left lg:text-center font-sans'>
              <h3 className='text-gray-800 text-3xl font-bold italic uppercase pb-5 lg:pb-7 text-center'>
                We provide you with many modern ways for signing in
                <style jsx>{`
                  h3 {
                    text-shadow: 0.1em 0.1em 0.5rem #c9c9c9;
                  }
                `}</style>
              </h3>

              <ul className='inline-grid w-full gap-y-2 xl:gap-y-4'>
                <li>
                  <FacebookLoginButton
                    onClick={() => signIn('facebook')}
                    align='center'
                    className={socialBtnCustom}
                  />
                </li>
                <li>
                  <GithubLoginButton
                    onClick={() => signIn('github')}
                    align='center'
                    className={socialBtnCustom}
                  />
                </li>
                <li>
                  <DiscordLoginButton
                    onClick={() => signIn('discord')}
                    align='center'
                    className={socialBtnCustom}
                  />
                </li>
                <li>
                  <GoogleLoginButton
                    onClick={() => signIn('google')}
                    align='center'
                    className={socialBtnCustom}
                  />
                </li>
              </ul>
              <div className='divider text-indigo-700 font-semibold uppercase'>
                Or
              </div>
              <h1 className='text-gray-800 text-2xl font-medium italic font-serif'>
                Preferred the good old days ? we got you cover too!
                <br />
              </h1>
              <small className='p-1 text-gray-400 italic text-center'>
                Free forever. No payment needed.
              </small>
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
                  className='py-3 lg:text-lg xl:text-2xl bg-gradient-to-r from-yellow-600 to-yellow-900 text-white w-full rounded transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer'
                />
              </div>
              <div className='mt-5 italic'>
                <small>
                  Don&apos;t have an account?{' '}
                  <Link href='/signup'>
                    <a className='mr-2 underline'>Sign up</a>
                  </Link>
                  instead
                </small>
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
