import Head from 'next/head'

import React from 'react'
import 'styles/modules/customFont.module.css'
import {SocialIcon} from 'react-social-icons'

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Welcome page</title>
      </Head>
      <section id='top' className='flex flex-col items-center justify-center'>
        <div className='w-full mx-auto py-2 bg-transparent'>
          <div className='flex justify-center min-h-screen min-w-full bg-hero-background bg-cover bg-no-repeat bg-origin-border bg-local lg:bg-center md:bg-bottom '>
            <div className='text-md text-center hero-content text-gray-100'>
              <div className='max-w-md'>
                <h1 className='mb-5 font-bold text-2xl lg:text-5xl md:text-4xl sm:text-3xl'>
                  Well hello there fellas 👋
                </h1>
                <p className='mb-5 lg:text-2xl md:text-xl sm:text-lg'>
                  Welcome to my portfolio website. I&apos;m glad that you can
                  pay me a visit.
                  <br />
                  <span
                    style={{
                      fontFamily: 'Inter',
                    }}
                  >
                    Here&apos;re my social networks, feel free to follow 🙏.{' '}
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
    </>
  )
}
