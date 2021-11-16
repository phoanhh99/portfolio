import React, {useContext} from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {ThemeContext} from './layout'

function Hobbies(props) {
  const {arr} = props

  const {theme} = useContext(ThemeContext)

  return (
    <>
      {arr.map(({name, icon}) => (
        <div
          key={name}
          className={classNames(
            'col-auto row-auto border-2 border-solid border-primary  flex justify-between items-center rounded-md p-3 cursor-default transition-all xl:p-5 hover:drop-shadow xl:justify-between xl:items-stretch',
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

export default Hobbies
