import Image from 'next/image'
import classNames from 'classnames'
export default function skillStack({theme}) {
  return (
    <>
      <section id='skill' className='py-20 bg-transparent'>
        <div className='container max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold tracking-tight text-center flex flex-row flex-nowrap justify-center place-items-center'>
            My stack
          </h2>
          <div className='grid grid-cols-4 gap-4 m-10 sm:grid-cols-8 sm:gap-6 lg:grid-cols-12 lg:gap-10 sm:px-8 xl:px-0'>
            <div
              className={classNames(
                'flex flex-col items-center  col-span-4 px-8 py-12 space-y-4 overflow-hidden rounded-lg',
                theme ? ' bg-gray-500 text-white' : ' bg-gray-100 text-gray-600'
              )}
            >
              <h2 className='text-xl font-bold inline-flex'>Front-end stack</h2>
              <p className=''>I have enough knowledge writing code in</p>
              <ul className='list-disc flex flex-col'>
                <li>
                  Vanilla JS{' '}
                  <Image
                    src='/images/misc/javascript-logo-svgrepo-com.svg'
                    alt='javascript-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  JQuery{' '}
                  <Image
                    src='/images/misc/jquery-logo.svg'
                    alt='jquery-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  React JS{' '}
                  <Image
                    src='/images/misc/reactjs-icon.svg'
                    alt='react-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  CSS3{' '}
                  <Image
                    src='/images/misc/CSS3_logo.svg'
                    alt='react-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  Bootstrap 3-4{' '}
                  <Image
                    src='/images/misc/bootstrap-4.svg'
                    alt='react-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  Material UI{' '}
                  <Image
                    src='/images/misc/material-ui.svg'
                    alt='react-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  TailwindCSS{' '}
                  <Image
                    src='/images/misc/tailwind-css.svg'
                    alt='react-logo'
                    width={25}
                    height={25}
                  />
                </li>
              </ul>
            </div>
            <div
              className={classNames(
                'flex flex-col items-center  col-span-4 px-8 py-12 space-y-4 overflow-hidden rounded-lg',
                theme ? ' bg-gray-500 text-white' : ' bg-gray-100 text-gray-600'
              )}
            >
              <h2 className='text-xl font-bold inline-flex'>Back-end stack</h2>
              <p className=''>I can also code in </p>
              <ul className='list-disc flex flex-col'>
                <li>
                  Java{' '}
                  <Image
                    src='/images/misc/spring.svg'
                    alt='java-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  .NET CORE MVC/ .NET MVC 5{' '}
                  <Image
                    src='/images/misc/dot-net-core.svg'
                    alt='dotnet-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  Node JS
                  <br />
                  <small>With framework like Express, NextJS</small>{' '}
                  <Image
                    src='/images/misc/nodejs.svg'
                    alt='node-logo'
                    width={60}
                    height={60}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
