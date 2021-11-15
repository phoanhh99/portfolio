import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
export default function Hobbies(props) {
  const {theme} = props
  const arr = [
    {name: 'Anime', icon: '/images/misc/tv-svgrepo-com.svg'},
    {name: 'Coding', icon: '/images/misc/laptop-code-svgrepo-com.svg'},
    {name: 'Football', icon: '/images/misc/football-svgrepo-com.svg'},
    {
      name: 'Listening to music',
      icon: '/images/misc/music-svgrepo-com.svg',
    },
  ]
  return (
    <>
      {arr.map(({name, icon}) => (
        <div
          key={name}
          className={classNames(
            'col-auto row-auto border-2 border-solid border-primary  flex justify-between items-center rounded-md p-3 cursor-default transition-all xl:p-5 hover:drop-shadow xl:justify-around xl:items-stretch',
            theme
              ? 'bg-transparent text-primary hover:bg-yellow-500 hover:text-white'
              : 'bg-transparent text-gray-900 hover:bg-primary hover:text-gray-200'
          )}
        >
          {name}
          <span>
            <Image
              src={icon}
              alt='icon'
              width={30}
              height={30}
              layout='fixed'
            />
          </span>
        </div>
      ))}
    </>
  )
}
