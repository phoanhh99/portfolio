import {LoginIcon} from '@heroicons/react/solid'
import cn from 'classnames'
import Link from 'next/link'

const LoginSection = ({theme}) => {
  const customSpan = cn(
    'text-sm md:text-base tracking-wide md:tracking-wider xl:tracking-widest',
    theme ? 'text-gray-100' : 'text-gray-600'
  )
  const customSVG = cn(
    'h-7 w-7 p-1 md:h-8 md:w-8',
    theme ? 'text-base' : 'text-gray-600'
  )
  return (
    <div className='mx-1 flex-grow-0'>
      <Link href='/login'>
        <a
          className={cn(
            theme
              ? 'text-yellow-600 bg-gray-100 hover:text-gray-100 hover:bg-yellow-600'
              : 'bg-gray-800 text-yellow-300 hover:text-gray-800 hover:bg-yellow-600',
            'flex max-h-11 items-center p-3 w-full rounded-lg transition duration-300 ease-linear transform hover:scale-110'
          )}
        >
          <span className={customSpan}>Sign in</span>
          <LoginIcon className={customSVG} transform='rotate(180)' />
        </a>
      </Link>
    </div>
  )
}

export default LoginSection
