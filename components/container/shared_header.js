import {SunIcon, MoonIcon, LoginIcon} from '@heroicons/react/outline'
import cn from 'classnames'
import {useAnimation} from 'utils/hooks/shared_header'
export default function SharedHeader(props) {
  const {theme, handleChange} = props
  const {
    state: {lightMode, darkMode, style},
    handleAnimation,
  } = useAnimation()

  const loginBtn = cn(
    theme
      ? 'text-yellow-600 bg-gray-100 hover:text-gray-100 hover:bg-yellow-600'
      : 'bg-gray-800 text-yellow-300 hover:text-gray-800 hover:bg-yellow-600',
    'flex max-h-11 items-center p-3 w-full rounded-lg transition duration-300 ease-linear transform hover:scale-110'
  )

  return (
    <div className='flex flex-col sticky top-0 w-full z-10'>
      <div className='navbar mb-2 bg-base-200 shadow-md'>
        <div className='flex-none px-2 mx-2'>
          <h4 className='text-3xl lg:text-2xl font-bold'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-pink-500 '>
              Portfolio
            </span>
          </h4>
        </div>
        <div className='flex-auto px-2 mx-2'>
          <div className='items-stretch hidden md:flex'>
            <a className='btn btn-ghost btn-sm rounded-btn'>Homepage</a>
            <a className='btn btn-ghost btn-sm rounded-btn'>Skillstack</a>
            <a className='btn btn-ghost btn-sm rounded-btn'>My CV</a>
          </div>
        </div>

        <div className='flex-none md:hidden'>
          <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-6 h-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </label>
        </div>
        <div className='flex-none hidden md:inline-flex'>
          <div className='mx-1 flex-nowrap w-max flex items-center'>
            <SunIcon
              className={cn('mx-1 h-7 w-7', lightMode)}
              fill={!theme ? '#F59E0B' : 'none'}
              style={style}
              onMouseEnter={() => handleAnimation('start', 'light')}
              onMouseLeave={() => handleAnimation('stop', 'light')}
            />
            <div className='form-control'>
              <input
                type='checkbox'
                className='toggle toggle-lg toggle-primary'
                onChange={e => handleChange(e.target.checked)}
                defaultChecked={theme}
              />
            </div>
            <MoonIcon
              className={cn('mx-1 h-7 w-7', darkMode)}
              fill={theme ? '#F3F4F6' : 'none'}
              style={style}
              onMouseEnter={() => handleAnimation('start', 'dark')}
              onMouseLeave={() => handleAnimation('stop', 'dark')}
            />
          </div>
          <div className='mx-1 flex-grow-0'>
            <button className={loginBtn}>
              <span className='mr-3'>Sign in</span>
              <LoginIcon className='h-7 w-7' transform='rotate(180)' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
