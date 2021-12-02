import {Popover, Transition} from '@headlessui/react'
import {UserIcon} from '@heroicons/react/outline'
import {signOut} from 'next-auth/react'
import Image from 'next/image'

const UserSection = ({profile: {image, name, email, isAuthenticated}}) => (
  <>
    <Popover className='relative'>
      <Popover.Button className='w-full h-full'>
        <div className='inline-flex flex-wrap items-center w-full mx-auto px-2 py-5 h-full text-transparent bg-clip-text user-profile'>
          <div className='m-auto relative w-16 h-16 rounded-full ring-4 ring-primary'>
            {isAuthenticated === 'loading' ? (
              <div className='w-16 h-16 rounded-full bg-gray-400 animate-pulse m-auto'></div>
            ) : isAuthenticated && image ? (
              <Image
                src={image}
                alt='user-avatar'
                width={60}
                height={60}
                layout='responsive'
                loading='lazy'
                className='rounded-full select-none'
              />
            ) : (
              <div className='w-16 h-16 rounded-full m-auto relative'>
                <UserIcon className='w-10 h-10 m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-current stroke-current stroke-2 text-red-700' />
              </div>
            )}
          </div>

          <div className='px-3 flex flex-col select-none' id='info-container'>
            {isAuthenticated === 'loading' ? (
              <>
                <div className='w-full h-3 bg-gray-400 animate-pulse'></div>
                <div className='w-full h-3 bg-gray-400 animate-pulse'></div>
              </>
            ) : (
              <>
                <h3 className='font-semibold text-xl'>{name}</h3>
                <h5>{email}</h5>
              </>
            )}
          </div>
        </div>
      </Popover.Button>
      <Transition
        enter='transition duration-200 ease-in'
        enterFrom='transform scale-90 translate-y-2 opacity-0'
        enterTo='transform scale-100 translate-y-0 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 translate-y-0 opacity-100'
        leaveTo='transform scale-95 translate-y-2 opacity-0'
      >
        <Popover.Panel className='absolute z-10 bg-base-100 w-full shadow-md'>
          <div className='flex flex-col justify-around items-stretch w-full h-24'>
            <button
              className='inline-flex items-center justify-around flex-1 text-xl font-semibold uppercase bg-super-big hover:bg-rainbow-color hover:text-transparent hover:bg-clip-text hover:animate-gradient-color-run tracking-wider'
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    <style jsx>{`
      .user-profile {
        background-image: linear-gradient(
          to bottom right,
          #ff416c,
          #ff4b2b,
          #8a2387
        );
        border: 0;
        cursor: pointer;
        outline: transparent;
        text-align: center;
        transition: box-shadow 0.3s ease-in-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        background-size: 300% 300%;
        animation: rainbow 5s linear infinite;
      }

      .user-profile:not([disabled]):focus {
        box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
          -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
          0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
      }

      .user-profile:not([disabled]):hover {
        box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
          -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
          0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
      }

      @keyframes rainbow {
        0%,
        100% {
          background-position: 0 20%;
        }
        50% {
          background-position: 80% 80%;
        }
      }
    `}</style>
  </>
)
export default UserSection
