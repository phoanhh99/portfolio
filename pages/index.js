import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import 'styles/modules/customFont.module.css'
import {SocialIcon} from 'react-social-icons'
import profilePic from 'public/images/ava/gallery5.jpg'
import classNames from 'classnames'
import getAge from '~/utils/helpers/getAge'
import VtuberList from '~/components/container/vtuberList'
import Hobbies from '~/components/container/hobbies'
import {getHobbies, getVtuberList} from '~/lib/controller/indexController'

export const getStaticProps = async () => {
  const hobbieList = await getHobbies()
  const content = await getVtuberList()
  return {
    props: {
      hobbieList: hobbieList,
      vtuberList: content,
    },
  }
}
export default function Homepage(props) {
  const {hobbieList, vtuberList} = props
  const age = getAge()

  return (
    <>
      <Head>
        <title>Welcome page</title>
      </Head>
      <section
        id='top'
        className='flex flex-col items-center justify-center  pb-10'
      >
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
      <div className='divider'></div>
      <section
        className='flex flex-1 items-center justify-center my-10 '
        id='about'
      >
        <div className=''>
          <div className='flex flex-col items-center'>
            <h1 className='pb-10 font-bold text-3xl lg:text-5xl md:text-4xl uppercase'>
              About me
            </h1>
            <div
              className={classNames(
                'flex flex-col items-center justify-center h-full w-full pt-5'
              )}
            >
              <figure>
                <Image
                  className='rounded-lg xl:rounded-b-xl shadow-md'
                  src={profilePic}
                  alt='aboutme-1'
                  quality={100}
                  placeholder='blur'
                />
              </figure>

              <div className='px-10 flex flex-1 xl:p-20'>
                <div
                  id='para-first'
                  className='text-lg tracking-wide md:text-xl xl:text-2xl'
                >
                  Firstly let me greet you again for visiting my{' '}
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-pink-500'>
                    Portfolio{' '}
                  </span>
                  where you can see my bios and ...well, non-related other
                  stuff.
                  <br />A little bit about myself, my name is{' '}
                  <span className='italic text-xl md:text-2xl xl:text-3xl'>
                    Nguyen Phuc Hoang Anh
                  </span>{' '}
                  or Hoang for short,{' '}
                  <span
                    className='italic font-bold underline text-xl md:text-2xl xl:text-3xl tooltip'
                    data-tip='Mr.Hammond used to called me by this nickname when we&rsquo;re learning english'
                  >
                    Charles
                  </span>{' '}
                  if you will.
                  <br />I was born in 08/12/1998 so which means i&rsquo;m{' '}
                  <span className='italic font-bold'>{age}</span> years old. As
                  for now web developing is my main job in{' '}
                  <a
                    className='link-primary font-bold'
                    href='https://www.ifc.org/wps/wcm/connect/corp_ext_content/ifc_external_corporate_site/home'
                  >
                    IFC
                  </a>{' '}
                  but sometimes i enjoy learning new technologies and practicing
                  them so i can be a better dev.
                  <br />
                  Like many other fresher devs when it comes to hobbies and
                  interested i&rsquo;m just like everybody else:
                  <Hobbies arr={hobbieList} />
                  and also i am huge fan of vtuber - kinda like Youtuber but
                  with anime avatar{' '}
                  <a
                    className='link-primary'
                    target='_blank'
                    href='https://virtualyoutuber.fandom.com/wiki/Virtual_YouTuber_Wiki'
                    rel='noreferrer'
                  >
                    click this to know more about it
                  </a>
                  <br />
                  These are some of my favorite vtubers:
                  <VtuberList arr={vtuberList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
