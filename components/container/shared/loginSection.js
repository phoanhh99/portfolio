import {LoginIcon} from '@heroicons/react/solid'
import cn from 'classnames'
import Link from 'next/link'

const LoginSection = ({theme}) => {
  const customSpan = cn(
    'text-lg font-semibold font-mono tracking-wide md:tracking-wider xl:tracking-widest'
  )
  const customSVG = cn(
    'h-7 w-7 p-1 md:h-8 md:w-8 stroke-current select-none',
    theme ? 'text-yellow-500' : 'text-gray-500'
  )
  return (
    <>
      <div className='mx-1 flex-grow-0' id='signin-section'>
        <Link href='/login'>
          <a className='flex rounded-lg text-transparent bg-clip-text justify-between items-center p-3 bg-super-big bg-rainbow-color animate-gradient-color-run '>
            <span className={customSpan}>Sign in</span>
            <LoginIcon className={customSVG} transform='rotate(180)' />
          </a>
        </Link>
      </div>
    </>
  )
}

export default LoginSection
