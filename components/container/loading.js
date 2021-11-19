import cn from 'classnames'
import {useContext} from 'react'
import {ThemeContext} from '../layout/layout'

export default function Loading() {
  const {theme} = useContext(ThemeContext)
  const bg__dl = theme ? 'bg-gray-800' : 'bg-gray-200'
  return (
    <>
      <div
        className={cn(
          'bg-transparent w-full mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none '
        )}
      >
        <span className={cn(bg__dl, 'h-28 w-28 rounded-xl animate-pulse')} />
        <div className='flex flex-col flex-1 gap-5 sm:p-2'>
          <div className='flex flex-1 flex-col gap-3'>
            <span
              className={cn(bg__dl, ' w-full animate-pulse h-5 rounded-2xl')}
            ></span>
            <span
              className={cn(bg__dl, ' w-full animate-pulse h-5 rounded-2xl')}
            ></span>
            <span
              className={cn(bg__dl, ' w-full animate-pulse h-5 rounded-2xl')}
            ></span>
            <span
              className={cn(bg__dl, ' w-full animate-pulse h-5 rounded-2xl')}
            ></span>
            <span
              className={cn(bg__dl, ' w-full animate-pulse h-5 rounded-2xl')}
            ></span>
          </div>
          <div className='mt-auto flex gap-3'>
            <div
              className={cn(bg__dl, 'w-20 h-8 animate-pulse rounded-full')}
            ></div>
            <div
              className={cn(bg__dl, 'w-20 h-8 animate-pulse rounded-full')}
            ></div>
            <div
              className={cn(
                bg__dl,
                'w-20 h-8 animate-pulse rounded-full  ml-auto'
              )}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}
