import classNames from 'classnames'
import {ChevronUpIcon} from '@heroicons/react/solid'

export default function ScrollBtn(props) {
  const {visibility, scrollToTop, scrollToBottom, isBottom, dir} = props
  const btn_chevron = {
    sm: 'h-7 w-7 pointer-events-none',
    lg: 'h-10 w-10 pointer-events-none',
  }

  const handleScroll = () =>
    dir === 'up' || (dir === 'down' && !isBottom)
      ? scrollToTop()
      : scrollToBottom()

  return (
    <>
      {visibility && (
        <div
          role='button'
          className={classNames(
            isBottom
              ? 'flex justify-center items-center m-3 p-3 border-green-500 border-2'
              : 'fixed bottom-0 transfrom -translate-y-1 -translate-x-1/2 left-1/2',
            ' rounded-full p-3 cursor-pointer text-green-500 hover:border-transparent hover:bg-green-500 hover:text-white transition duration-300 ease-linear'
          )}
          onClick={handleScroll}
        >
          <ChevronUpIcon
            className={classNames(
              dir === 'down' && !isBottom
                ? 'rotate-180'
                : dir === 'up' && !isBottom
                ? 'rotate-0'
                : '',
              'transition-transform transform',
              isBottom ? btn_chevron.sm : btn_chevron.lg
            )}
          />
        </div>
      )}
    </>
  )
}
