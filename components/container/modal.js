import {Dialog, Transition} from '@headlessui/react'
import {ArrowLeftIcon, XIcon} from '@heroicons/react/outline'
import classNames from 'classnames'
import Image from 'next/image'
import {Fragment, useEffect, useRef} from 'react'
import {Timeline} from 'react-twitter-widgets'
import ScrollBtn from './scrollBtn'
import useScrollTo from '~/utils/hooks/useScrollTo'
export default function MyDialog(prop) {
  const {
    isOpenModal,
    closeInformation,
    content: {image, name, description, url, alt},
    theme,
  } = prop

  const buttonRef = useRef(null)
  const {
    btnState: {isBottom, visibility, dir},
    modalState: {pos, maxHeight, scrollHeight},
    getModalPosition,
    scrollToTop,
    scrollToBottom,
    reset,
  } = useScrollTo()
  useEffect(() => !isOpenModal && reset, [isOpenModal, reset])

  return (
    <Transition appear show={isOpenModal} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-20 overflow-hidden'
        onClose={closeInformation}
        initialFocus={buttonRef}
      >
        <div className='min-h-screen text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div
              className={classNames(
                theme ? 'bg-black ' : 'bg-gray-100',
                'relative inline-block text-left h-screen w-full overflow-auto transition-all'
              )}
              onScroll={e => getModalPosition(e)}
            >
              <div className='flex flex-row flex-grow justify-start m-5 md"mx-10 md:my-5'>
                <div
                  ref={buttonRef}
                  type='button'
                  className={classNames(
                    theme ? 'text-gray-200' : 'text-indigo-700',
                    'w-32 text-xl m-3 p-3 inline-flex items-center bg-transparent cursor-pointer transition-transform hover:scale-125 focus:border-2 focus:border-solid focus:border-primary'
                  )}
                  onClick={closeInformation}
                >
                  <ArrowLeftIcon className='h-5 w-5 mr-3' />
                  Back
                </div>
              </div>
              <div className='grid grid-flow-row grid-cols-1 gap-4 p-2 md:grid-cols-2 md:grid-rows-1 xl:grid-rows-2'>
                <div className='row-span-2 m-auto'>
                  <Image
                    src={image}
                    alt={alt}
                    width={350}
                    height={350}
                    quality={100}
                    loading='lazy'
                    crossOrigin='use-credentials'
                    className='object-contain object-center select-none'
                  />
                </div>

                <div
                  className={
                    (classNames(theme ? 'text-yellow-500' : 'text-gray-700'),
                    'text-2xl font-bold text-left xl:row-span-2')
                  }
                >
                  <Dialog.Title as='h3' className='text-center'>
                    {name}
                  </Dialog.Title>
                  <Dialog.Description className='text-xl font-medium tracking-wide p-2'>
                    {description}
                  </Dialog.Description>
                </div>
              </div>
              <div className='divide-y divide-base-100 divide-solid'></div>
              <div
                className='w-full pt-10 flex flex-col items-center'
                id='twitter-section'
              >
                <p className='text-xl font-bold py-10'>Recent tweets </p>
                <div className='self-center w-full lg:w-2/3'>
                  <Timeline
                    dataSource={{
                      sourceType: 'url',
                      url: url,
                    }}
                    options={{
                      ...(theme
                        ? {theme: 'dark', borderColor: '#A45110'}
                        : {theme: 'light', borderColor: '#8d10a4'}),
                      tweetLimit: 10,
                      ariaPolite: 'rude',
                      chrome: 'noheader, nofooter, transparent',
                      showReplies: false,
                    }}
                    renderError={() => <p>Couldn&apos;t load tweet</p>}
                  />
                </div>
              </div>
              <div className='flex flex-row flex-grow justify-around items-center p-10'>
                {isBottom && (
                  <div
                    type='button'
                    className={classNames(
                      'w-min hover:bg-red-500 hover:text-white hover:border-transparent text-red-500 border-2 border-red-500 text-xl m-3 p-3 rounded-full md:rounded-md inline-flex items-center justify-center cursor-pointer transition duration-300 ease-linear'
                    )}
                    onClick={closeInformation}
                  >
                    <XIcon className='h-7 w-7' />
                  </div>
                )}

                <ScrollBtn
                  visibility={visibility}
                  scrollToTop={scrollToTop}
                  scrollToBottom={scrollToBottom}
                  isBottom={isBottom}
                  dir={dir}
                />
              </div>
              <section id='footer'>
                <div
                  className={classNames(
                    pos + maxHeight === scrollHeight
                      ? '-translate-x-none opacity-100'
                      : '-translate-x-1/3 opacity-0',
                    'flex flex-grow flex-row justify-around items-center py-10 transition duration-1000 ease-bounce-in-out transform'
                  )}
                >
                  <div
                    className='text tracking-wide font-light '
                    id='copyright'
                  >
                    Ⓒ 2016 COVER 🍀 Corp.
                  </div>
                  <div className='text tracking-wide font-light ' id='author'>
                    Made with 💓 by HoangAnh
                  </div>
                </div>
              </section>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
