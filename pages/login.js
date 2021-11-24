import React from 'react'
import Link from 'next/link'
import {UserIcon, MailIcon, LockClosedIcon} from '@heroicons/react/outline'

const Login = () => {
  return (
    <>
      {/* <div className='relative min-h-full w-full bg-gradient-to-l from-calliope to-purple-600 bg-cover bg-fixed'>
        <div className='flex flex-col sm:flex-row items-center lg:justify-start'>
          <div
            className='w-1/2'
            style={{
              backgroundImage: `url('/images/background/collins-lesulie-P3l3cqVLoRs-unsplash.jpg'
              )`,
            }}
          ></div>
        </div>
      </div> */}

      <div className='relative flex min-h-screen w-full bg-gradient-to-l from-calliope to-purple-600'>
        <div className='w-1/2 bg-cover md:block hidden bg-login-background'></div>

        <div className='md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none'>
          <div className='text-left p-0 font-sans'>
            <h1 className=' text-gray-800 text-3xl font-medium'>
              Create an account for free
            </h1>
            <h3 className='p-1 text-gray-700'>
              Free forever. No payment needed.
            </h3>
          </div>
          <form action='#' className='p-0'>
            <div className='mt-5'>
              <input
                type='text'
                className='block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent '
                placeholder='Email'
              />
            </div>
            <div className='mt-5'>
              <input
                type='text'
                className='block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent '
                placeholder='User-name'
              />
            </div>
            <div className='mt-5'>
              <input
                type='password'
                className='block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  '
                placeholder='Password'
              />
            </div>
            <div className='mt-10'>
              <input
                type='submit'
                value='Sign up with email'
                className='py-3 bg-green-500 text-white w-full rounded hover:bg-green-600'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>
}

export default Login
