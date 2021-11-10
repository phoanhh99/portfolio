import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import 'styles/modules/customFont.module.css'
import {SocialIcon} from 'react-social-icons'
import classNames from 'classnames'
export default function Homepage(props) {
  const {theme} = props
  return (
    <>
      <Head>
        <title>Welcome page</title>
      </Head>
      <section id='#top' className='flex flex-col items-center justify-center'>
        <div className='w-screen mx-auto py-2 bg-transparent'>
          <div className='flex justify-center min-h-screen min-w-full bg-hero-background bg-cover bg-no-repeat bg-origin-border bg-local lg:bg-center md:bg-bottom '>
            <div className='text-md text-center hero-content text-gray-100 font-'>
              <div className='max-w-md'>
                <h1 className='mb-5 font-bold text-2xl lg:text-5xl md:text-4xl sm:text-3xl'>
                  Well hello there fellas 👋
                </h1>
                <p className='mb-5 lg:text-2xl md:text-xl sm:text-lg'>
                  Welcome to my portfolio website. I&apos;m glad that you can
                  pay me a visit
                  <br />
                  <span
                    style={{
                      fontFamily: 'Inter',
                    }}
                  >
                    Here&apos;s my social network, feel free to follow 🙏.{' '}
                  </span>
                </p>
                <ul className='flex flex-row flex-wrap flex-grow w-full justify-evenly'>
                  <li>
                    <SocialIcon
                      url='https://twitter.com/Kurumeii'
                      target='_blank'
                      fgColor='#ffff'
                    />
                  </li>
                  <li>
                    <SocialIcon
                      url='https://www.facebook.com/nguyenphuc.hoanganh.1'
                      fgColor='#ffff'
                      target='_blank'
                    />
                  </li>
                  <li>
                    <SocialIcon
                      url='https://www.youtube.com/channel/UCgrqQOjae9gCdY1Kfk1ePfQ'
                      fgColor='#ffff'
                      target='_blank'
                    />
                  </li>
                  <li>
                    <SocialIcon
                      url='https://github.com/kurumeii'
                      fgColor='#ffff'
                      target='_blank'
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='#skill' className='py-20 bg-transparent'>
        <div className='container max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold tracking-tight text-center'>
            My skill stack
          </h2>
          <div className='grid grid-cols-4 gap-4 mt-10 sm:grid-cols-8 sm:gap-6 lg:grid-cols-12 lg:gap-10 sm:px-8 xl:px-0'>
            <div className='relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 rounded-lg'>
              <div
                className={classNames(
                  'p-3 rounded-lg',
                  theme
                    ? 'text-gray-100 bg-purple-600 '
                    : 'text-purple-600 bg-text-gray-100 '
                )}
              >
                <Image
                  src='/images/misc/javascript-logo-svgrepo-com.svg'
                  alt='javascript-logo'
                  width={40}
                  height={40}
                />
              </div>
              <h4 className='text-xl font-medium text-gray-700'>
                Certifications
              </h4>
              <p className='text-base text-center text-gray-500'>
                Each of our plan will provide you and your team with
                certifications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
