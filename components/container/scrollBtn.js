import classNames from 'classnames'
import {useCallback, useContext, useEffect, useState} from 'react'
import {ThemeContext} from '../layout/layout'
import {ChevronUpIcon} from '@heroicons/react/solid'
import useScrollTop from '~/utils/hooks/useScrollTop'

export default function ScrollBtn() {
  const {theme} = useContext(ThemeContext)
  const bg__dl = theme
    ? 'hover:bg-red-500 hover:text-white border-red-500'
    : 'hover:bg-black hover:text-white border-black'
  const [isShow, setIsShow] = useState(false)
  const scrollTop = useCallback(
    () =>
      window.scrollTo({
        top: 0,
        behavior: 0,
      }),
    []
  )
  useEffect(() => {
    const checkScrollTop = () => {
      if (!isShow && window.scrollY > 400) {
        setIsShow(true)
      } else setIsShow(false)
    }
    window.addEventListener('scroll', checkScrollTop)

    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [isShow])

  return (
    <>
      {isShow && (
        <button
          className={classNames(
            bg__dl,
            'flex items-center p-4 transition ease-in duration-200 uppercase rounded-full border-2 focus:outline-none'
          )}
          onClick={() => scrollTop()}
        >
          <ChevronUpIcon className='h-4 w-4' />
          Scroll to top
        </button>
      )}
    </>
  )
}
