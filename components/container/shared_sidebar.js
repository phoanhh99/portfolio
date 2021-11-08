import React from 'react'
import classNames from 'classnames'
import {XIcon} from '@heroicons/react/outline'

export default function SharedSideBar(props) {
  const {theme, isPressed, handlePress} = props
  return (
    <div
      className={classNames(
        'fixed flex flex-none justify-end inset-y-0 left-0 z-30 w-screen h-screen transition duration-500 bounce-in-out',
        isPressed
          ? 'transform translate-x-0 bg-black bg-opacity-80 opacity-100'
          : 'transform translate-x-full opacity-0'
      )}
    >
      <div
        className={classNames(
          'flex flex-col h-screen px-5 py-1 overflow-y-auto overscroll-contain text-yellow-500 w-1/2 md:w-1/3 lg:w-1/5 transition-colors',
          theme ? 'bg-black' : 'bg-gray-200'
        )}
      >
        <button
          className='btn btn-circle btn-sm sm:btn-md md:btn-lg btn-ghost self-end'
          onClick={handlePress}
        >
          <XIcon className={classNames('mx-1 h-8 w-8')} />
        </button>
        <ul className='menu overflow-auto'>
          <li className='my-1'>
            <button className='btn btn-ghost'>item1</button>
          </li>
          <li className='my-1'>
            <button className='btn btn-ghost'>item1</button>
          </li>
          <li className='my-1'>
            <button className='btn btn-ghost'>item1</button>
          </li>
          <li className='my-1'>
            <button className='btn btn-ghost'>item1</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
