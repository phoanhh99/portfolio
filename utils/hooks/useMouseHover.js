import {useState} from 'react'

export default function useMouseHover(imgRef) {
  const [isShow, setShow] = useState({
    whichOne: '',
    status: false,
  })
  const handleEventOut = ({currentTarget}) =>
    imgRef.current.includes(currentTarget) &&
    setShow({
      whichOne: currentTarget,
      status: false,
    })
  const handleEventIn = ({currentTarget}) =>
    imgRef.current.includes(currentTarget) &&
    setShow({
      whichOne: currentTarget,
      status: true,
    })

  return {isShow, handleEventOut, handleEventIn}
}
