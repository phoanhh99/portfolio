import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {MailIcon, LockClosedIcon, UserCircleIcon} from '@heroicons/react/solid'
import Header from 'next/head'
import classNames from 'classnames'

const arrList = [
  {
    name: 'Miss Muffin',
    says: `So proud of my senpai's work 🤍🤍🤍🤍`,
    avatar: '/images/ava/card-user-ava2.jpg',
  },
  {
    name: 'Mr.Ha',
    says: `I don't know what to say more about this one, It is the best thing i have seen in my entire life as a front-end dev. Kudos to this guy to be able to do that`,
    avatar: '/images/ava/card-user-ava4.jpg',
  },
  {
    name: 'Mr.Tyki Mikk',
    says: `At first i was very skeptical about this and i gotta say, im a very hard to please person but this guy who made this ? Such a genius! Absolutely one of his kind!! 🔥`,
    avatar: '/images/ava/card-user-ava3.jpg',
  },
  {
    name: 'Mr.Soul',
    says: `Sheesh, this guy is once again mananged to impress me with his beautiful works 👏`,
    avatar: '/images/ava/card-user-ava1.jpg',
  },
]

function SignUp() {
  const [index, setActive] = useState(0)
  const [cardDetail, setCardDetail] = useState({
    name: arrList[index].name,
    says: arrList[index].says,
    avatar: arrList[index].avatar,
  })
  useEffect(() => {
    const auto = setInterval(() => {
      setActive(prev => (prev + 1) % arrList.length)
      setCardDetail(prev => {
        return {
          ...prev,
          transition: true,
        }
      })
    }, 10000)
    return () => clearInterval(auto)
  }, [])
  useEffect(() => {
    setCardDetail(prev => {
      return {
        ...prev,
        name: arrList[index].name,
        says: arrList[index].says,
        avatar: arrList[index].avatar,
      }
    })
    const auto = setTimeout(() => {
      setCardDetail(prev => {
        return {
          ...prev,
          transition: false,
        }
      })
    }, 900)
    return () => clearTimeout(auto)
  }, [index])

  return (
    <>
      <Header>
        <title>Sign up</title>
      </Header>

      <div className='flex justify-start min-h-screen min-w-scren bg-gray-200'>
        <div className='w-1/2 h-screen bg-gray-200 animate-sliding-in-left '>
          <form action='#' className='h-1/2 w-full p-12 font-mono font-bold'>
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
            <div className='mt-5 relative transition-colors focus-within:text-pink-500'>
              <div className='absolute inset-y-0 left-0 mx-2 flex items-center justify-center '>
                <UserCircleIcon className='h-7 w-7  pointer-events-none' />
              </div>
              <input
                type='text'
                className='text-black placeholder-opacity-70 block w-full  px-10 py-3 md:py-5 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-500  '
                placeholder='USERNAME'
                autoComplete='off'
              />
              <span></span>
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
                className='py-3 lg:text-lg xl:text-2xl bg-purple-600 hover:bg-purple-900 text-white w-full rounded transition-all transform hover:scale-105 hover:drop-shadow-xl cursor-pointer'
              />
            </div>
          </form>
        </div>
        <div className='relative h-screen md:w-1/2 bg-gradient-to-br from-pink-600 to-indigo-800 animate-fade-in'>
          <div className='absolute bottom-0 flex flex-col justify-between items-center h-2/3 w-full'>
            <div className='grid grid-cols-3 grid-rows-2 gap-y-10'>
              <div className='avatar items-center col-start-2 col-span-2'>
                <div
                  className={classNames(
                    'rounded-full w-20 h-20 ring ring-primary ring-offset-4',
                    cardDetail?.transition && 'animate-sliding-out-left'
                  )}
                >
                  <Image
                    src={cardDetail.avatar}
                    alt='avatar'
                    width={300}
                    height={300}
                  />
                </div>
                <div className='px-5 text-xl font-light'>{cardDetail.name}</div>
              </div>
              <div
                className={classNames(
                  'p-5 font-sans text-lg font-semibold col-span-3',
                  cardDetail?.transition && 'animate-sliding-out-left'
                )}
              >
                {cardDetail.says}
              </div>
            </div>
            <div className='py-5 inline-flex items-stretch'>
              {arrList.map((v, i) => (
                <span
                  key={i}
                  className={classNames(
                    'h-3.5 w-3.5 rounded-full mx-2 border-2 border-solid border-black',
                    index === i ? 'bg-transparent' : 'bg-gray-100',
                    cardDetail?.transition && 'animate-sliding-out-left'
                  )}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SignUp.getLayout = function getLayout(page) {
  return <>{page}</>
}

export default SignUp
