import classNames from 'classnames'
import {ChevronUpIcon, ChevronDownIcon} from '@heroicons/react/solid'

export default function ScrollBtn(props) {
  const {visibility, scrollToTop, scrollToBottom, isBottom, dir} = props
  const btn_chevron = {
    sm: 'h-7 w-7 pointer-events-none',
    lg: 'h-10 w-10 pointer-events-none',
  }
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
          onClick={() =>
            dir === 'up'
              ? scrollToTop()
              : dir === 'down' && !isBottom
              ? scrollToBottom()
              : scrollToTop()
          }
        >
          {dir === 'up' && !isBottom ? (
            <ChevronUpIcon className={btn_chevron.lg} />
          ) : dir === 'down' && !isBottom ? (
            <ChevronDownIcon className={btn_chevron.lg} />
          ) : (
            <ChevronUpIcon className={btn_chevron.sm} />
          )}
        </div>
      )}
    </>
  )
}
