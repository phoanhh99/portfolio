import {LockClosedIcon, MailIcon, UserCircleIcon} from '@heroicons/react/solid'
import classNames from 'classnames'
import Header from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, {useCallback} from 'react'
import {getCardList} from '~/lib/controller/signUpController'
import useAutoSlide from '~/utils/hooks/useAutoSlide'
import {useState} from 'react'
export const getStaticProps = async () => {
  const list = await getCardList()
  return {
    props: {
      arrList: list,
    },
  }
}

function SignUp({arrList}) {
  const {
    cardDetail: {avatar, name, says, transition},
    index,
  } = useAutoSlide(arrList)
  const [fileUploaded, setUploadedFile] = useState({
    imgSrc: '',
    imgName: '',
  })
  const handleUpload = useCallback(e => {
    const file = e?.target?.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', event => {
      setUploadedFile({
        imgSrc: event.target.result,
        imgName: file.name,
      })
    })
    reader.readAsDataURL(file)
  }, [])

  return (
    <>
      <Header>
        <title>Sign up</title>
      </Header>

      <div className='flex justify-start min-h-screen min-w-scren bg-gray-200'>
        <div className='w-full md:w-1/2 bg-gray-200 animate-sliding-in-left '>
          <Link href='/login' replace>
            <a role='button' className='btn btn-link float-left'>
              Back to login
            </a>
          </Link>
          <form
            action='#'
            className='h-1/2 w-full p-12 text-gray-900 font-mono font-bold'
          >
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
            <div className='mt-5 relative'>
              <label className='btn btn-outline'>
                <input
                  type='file'
                  className='hidden'
                  accept='image/*'
                  onChange={handleUpload}
                />
                Upload Image
              </label>
              {fileUploaded.imgSrc && (
                <section className='relative h-56 w-56 my-10' id='upload-field'>
                  <Image
                    src={fileUploaded.imgSrc}
                    alt={fileUploaded.imgName}
                    layout='fill'
                    loading='lazy'
                    className='bg-center bg-cover bg-no-repeat shadow-lg rounded-sm'
                  />
                </section>
              )}
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
        <div className='relative h-screen hidden md:block md:w-1/2 bg-gradient-to-br from-pink-600 to-indigo-800 animate-fade-in'>
          <div className='absolute bottom-0 flex flex-col justify-between items-center h-2/3 w-full'>
            <div className='grid grid-cols-3 grid-rows-2 gap-y-10 text-gray-100'>
              <div className='avatar items-center col-start-2 col-span-2 select-none'>
                <div
                  className={classNames(
                    'rounded-full w-20 h-20 ring ring-primary ring-offset-4',
                    transition && 'animate-sliding-out-left'
                  )}
                >
                  <Image
                    src={avatar}
                    alt='avatar'
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div className='px-5 text-xl font-light'>{name}</div>
              </div>
              <div
                className={classNames(
                  'p-5 font-sansz text-lg font-semibold col-span-3',
                  transition && 'animate-sliding-out-left'
                )}
              >
                {says}
              </div>
            </div>
            <div className='py-5 inline-flex items-stretch'>
              {arrList.map((v, i) => (
                <span
                  key={i}
                  className={classNames(
                    'h-3.5 w-3.5 rounded-full mx-2 border-2 border-solid border-black',
                    index === i ? 'bg-transparent' : 'bg-gray-100'
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
