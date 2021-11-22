import {useCallback} from 'react'
import {useState} from 'react'

export default function useMouseHover(imgRef) {
  const [isShow, setShow] = useState({
    whichOne: '',
    status: false,
  })
  const handleEventOut = useCallback(
    ({currentTarget}) =>
      imgRef.current.includes(currentTarget) &&
      setShow({
        status: false,
      }),
    [imgRef]
  )
  const handleEventIn = useCallback(
    ({currentTarget}) =>
      imgRef.current.includes(currentTarget) &&
      setShow({
        whichOne: currentTarget,
        status: true,
      }),
    [imgRef]
  )

  return {isShow, handleEventOut, handleEventIn}
}
