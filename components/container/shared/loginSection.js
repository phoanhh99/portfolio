import {LoginIcon} from '@heroicons/react/solid'
import cn from 'classnames'
import Link from 'next/link'

const LoginSection = () => {
  const customSpan = cn(
    'text-md tracking-wide md:tracking-wider xl:tracking-widest'
  )
  const customSVG = cn('h-7 w-7 p-1 md:h-8 md:w-8')
  return (
    <div className='mx-1 flex-grow-0'>
      <Link href='/login'>
        <a className='flex max-h-11 justify-between items-center p-3 w-full bg-contain bg-clip-text text-transparent bg-rainbow-color animate-gradient-color-run rounded-lg'>
          <span className={customSpan}>Sign in</span>
          <LoginIcon className={customSVG} transform='rotate(180)' />
        </a>
      </Link>
    </div>
  )
}

export default LoginSection
