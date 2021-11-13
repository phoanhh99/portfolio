import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import 'styles/modules/customFont.module.css'
import {SocialIcon} from 'react-social-icons'
import {FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'
import profilePic from 'public/images/ava/gallery5.jpg'
import {
  faTelevision,
  faLaptopCode,
  faFutbol,
  faHeadphonesSimple,
} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import getAge from '~/utils/misc/getAge'
export default function Homepage({theme}) {
  const age = getAge()
  return (
    <>
      <Head>
        <title>Welcome page</title>
      </Head>
      <section id='top' className='flex flex-col items-center justify-center'>
        <div className='w-full mx-auto py-2 bg-transparent'>
          <div className='flex justify-center h-screen min-w-full bg-hero-background bg-cover bg-no-repeat bg-origin-border bg-local lg:bg-center md:bg-bottom '>
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
      <section
        className='flex flex-1 items-center justify-center py-14'
        id='about'
      >
        <div className='p-10'>
          <div className='flex flex-col items-center'>
            <h1 className='pb-10 font-bold text-3xl lg:text-5xl md:text-4xl uppercase'>
              About me
            </h1>
            <div
              className={classNames(
                'flex flex-col flex-none items-center justify-center xl:flex-row-reverse xl:items-stretch pt-5 transition duration-500 ease-in-out',
                theme ? 'bg-gray-600' : 'bg-gray-50'
              )}
            >
              <figure className='rounded-lg xl:rounded-r-lg xl:rounded-l-none shadow-md flex items-center'>
                <Image
                  src={profilePic}
                  alt='aboutme-1'
                  quality={100}
                  placeholder='blur'
                  priority
                />
              </figure>

              <div
                className={classNames(
                  'rounded-lg xl:rounded-l-lg xl:rounded-r-none xl:w-2/3 '
                )}
              >
                <div className='p-5 lg:p-10' id='aboutCard--body'>
                  <div
                    id='para-first'
                    className='text-lg md:text-xl xl:text-2xl'
                  >
                    Firstly let me greet you again for visiting my Portfolio
                    where you can see my stuff and ...well, non-related others
                    stuff. A little bit about myself, my name is{' '}
                    <span className='italic text-xl md:text-2xl xl:text-3xl'>
                      Nguyen Phuc Hoang Anh
                    </span>{' '}
                    or Hoang for short,{' '}
                    <span className='italic text-xl md:text-2xl xl:text-3xl'>
                      Charles{' '}
                    </span>
                    if you will. My birthday is 08/12/1998 so which means i
                    &rsquo;m
                    <span className='underline font-bold'> {age}</span> years
                    old now. When it comes to hobbies and interested this are
                    the list :
                    <ul className='list-disc list-inside'>
                      <li>
                        Anime <Fa icon={faTelevision}></Fa>
                      </li>
                      <li>
                        Coding <Fa icon={faLaptopCode}></Fa>
                      </li>
                      <li>
                        Football <small>or soccer</small>{' '}
                        <Fa icon={faFutbol}></Fa>
                      </li>
                      <li>
                        Listening to music ~ <Fa icon={faHeadphonesSimple}></Fa>
                      </li>
                    </ul>
                  </div>
                  <div id='para-second'>
                    <figure>
                      <blockquote>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum amet odio accusantium delectus omnis totam
                        aliquid sunt explicabo molestiae modi suscipit eos sit
                        unde, veritatis blanditiis qui sint nisi odit nemo
                        dolores cumque accusamus minus quibusdam vitae. Saepe
                        magnam ratione quo perspiciatis illo distinctio a rem
                        enim omnis error autem tempore, sint explicabo odit
                        labore, odio rerum accusantium, id tempora. Quidem
                        veritatis dolores laudantium ratione nulla labore maxime
                        accusantium, exercitationem a suscipit, consequatur
                        ullam quibusdam cum ducimus unde possimus quia iste
                        obcaecati saepe in similique aut officiis laborum.
                        Adipisci molestiae dolor numquam accusantium eum
                        explicabo quod quis at earum minus!
                        <figcaption>
                          &mdash; Jeremy Keith, <cite>Mental models</cite>
                        </figcaption>
                      </blockquote>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
