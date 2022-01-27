import classNames from 'classnames'
import Head from 'next/head'
import Image from 'next/image'
import {useContext} from 'react'
import Layout, {ThemeContext} from '~/components/layout/layout'

export default function SkillStack() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <Head>
        <title>My skill</title>
      </Head>
      <section id='skill' className='py-20 bg-transparent'>
        <div className='container max-w-6xl mx-auto'>
          <div className=''>
            <div
              className={classNames(
                'flex flex-row items-center justify-evenly',
                theme ? ' bg-gray-700 text-white' : ' bg-white text-black'
              )}
            >
              <Image
                src={'/undraw_programmer_re_owql.svg'}
                alt='coding'
                width={350}
                height={350}
              ></Image>
              <div className='flex flex-wrap flex-col h-screen bg-base'>
                <div className='m-auto'>
                  <div className='w-96 h-auto bg-gray-100 p-3 rounded-full'>
                    <div className='inline-block w-72 h-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full p-2'></div>
                  </div>
                  <div className='text-lg text-center font-bold'>
                    Javascript
                  </div>
                </div>
                <div className='m-auto'>
                  <div className='w-96 h-auto bg-gray-100 p-3 rounded-full'>
                    <div className='inline-block w-40 h-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full p-2'></div>
                  </div>
                  <div className='text-lg text-center font-bold'>c#</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
SkillStack.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
