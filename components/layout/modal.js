import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import Image from 'next/image'
import classNames from 'classnames'
export default function MyDialog(prop) {
  const {
    isOpenModal,
    closeInformation,
    content: {image, name},
    theme,
  } = prop
  return (
    <Transition appear show={isOpenModal} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 w-full h-full overflow-auto '
        onClose={closeInformation}
      >
        <div className='flex flex-grow flex-row justify-center items-center h-full w-full bg-black bg-opacity-60'>
          {/* <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <Dialog.Overlay className='flex  h-full w-full' />
          </Transition.Child> */}

          {/* This element is to trick the browser into centering the modal contents. */}
          {/* <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          ></span> */}
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
                'flex flex-col w-3/4  overflow-hidden transition-all md:flex-none sm:w-1/2 md:w-2/5 lg:1/4'
              )}
            >
              <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <Dialog.Title
                      as='h3'
                      className={
                        (classNames(
                          theme ? 'text-yellow-500' : 'text-gray-800'
                        ),
                        'text-2xl font-bold')
                      }
                    >
                      {name}
                    </Dialog.Title>
                  </div>
                </div>
              </div>

              <div className='p-2'>
                <Image
                  src={image}
                  alt={name}
                  width={350}
                  height={350}
                  layout='responsive'
                  quality={100}
                  loading='lazy'
                  className='object-contain object-center'
                />
              </div>

              <div className='p-4 flex flex-row flex-wrap justify-end'>
                <button
                  type='button'
                  className={classNames(
                    theme
                      ? 'text-gray-200 bg-indigo-700'
                      : 'text-indigo-700 bg-transparent',
                    'w-1/3 inline-flex justify-center rounded-md font-bold  px-4 py-2 lg:text-xl sm:text-2xl  shadow-sm  transition-transform hover:scale-105'
                  )}
                  onClick={closeInformation}
                >
                  Back
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
