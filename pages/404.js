import Image from 'next/image'
import Head from 'next/head'
import Kitty from '~/public/kitty.svg'
import {useContext} from 'react'
import Layout, {ThemeContext} from '~/components/layout/layout'
import classNames from 'classnames'
function Custom404() {
  const {theme} = useContext(ThemeContext)
  const container_dl = classNames(
    theme ? 'text-gray-100' : 'text-gray-700',
    'container flex flex-col md:flex-row items-center justify-center px-5'
  )
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className='bg-transparent flex items-center w-full h-screen'>
        <div className={container_dl}>
          <div className='max-w-md'>
            <div className='text-5xl font-dark font-bold tracking-widest text-center'>
              404
            </div>
            <p className='text-2xl md:text-3xl font-light leading-normal'>
              Sorry we couldn&apos;t find this page.{' '}
            </p>
            <p className='mb-8'>Contact me if something is wrong</p>
          </div>
          <div className='max-w-lg'>
            <Image src={Kitty} alt='kitty' />
          </div>
        </div>
      </div>
    </>
  )
}

Custom404.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Custom404
