import Image from 'next/image'
import {Fragment, useRef} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import classNames from 'classnames'
import {Timeline} from 'react-twitter-widgets'
import {ArrowLeftIcon} from '@heroicons/react/outline'
export default function MyDialog(prop) {
  const {
    isOpenModal,
    closeInformation,
    content: {image, name, description, url, alt},
    theme,
  } = prop
  const buttonRef = useRef(null)
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
                theme ? 'bg-gray-900' : 'bg-gray-100',
                'relative inline-block text-left h-screen w-full overflow-auto transition-all'
              )}
            >
              <div className='grid grid-cols-2 gap-4 p-2'>
                <div className='p-4 col-span-2'>
                  <div
                    type='button'
                    ref={buttonRef}
                    className={classNames(
                      theme ? 'text-gray-200' : 'text-indigo-700',
                      'w-32 m-3 p-3 flex flex-row flex-shrink justify-center items-center bg-transparent cursor-pointer transition-transform hover:scale-125 focus:border-2 focus:border-solid focus:border-primary'
                    )}
                    onClick={closeInformation}
                  >
                    <ArrowLeftIcon className='h-5 w-5 mr-3' />
                    Back
                  </div>
                </div>
                <Image
                  src={image}
                  alt={alt}
                  width={350}
                  height={350}
                  quality={100}
                  loading='lazy'
                  crossOrigin='use-credentials'
                  className='object-contain object-center col-span-2'
                />
                <div
                  className={
                    (classNames(theme ? 'text-yellow-500' : 'text-gray-800'),
                    'text-2xl font-bold')
                  }
                >
                  <Dialog.Title as='h3'>{name}</Dialog.Title>
                  <Dialog.Description className='text-xl font-medium tracking-wide pt-2'>
                    {description}
                  </Dialog.Description>
                </div>
              </div>
              <div className='divide-y divide-base-100 divide-solid'></div>
              <div className='w-full pt-10 flex flex-col justify-center items-center'>
                <p className='text-xl font-bold py-10'>Recent tweets </p>
                <div className='self-stretch'>
                  <Timeline
                    dataSource={{
                      sourceType: 'url',
                      url: url,
                    }}
                    options={{
                      ...(theme ? {theme: 'dark'} : {theme: 'light'}),
                      tweetLimit: 6,
                      ariaPolite: 'rude',
                      chrome: 'noheader, nofooter, noborders, transparent',
                      showReplies: true,
                    }}
                    renderError={() => <p>Couldn&apos;t load tweet</p>}
                  />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
