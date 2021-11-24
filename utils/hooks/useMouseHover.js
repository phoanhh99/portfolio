import {useState} from 'react'

export default function useMouseHover() {
  const [isShow, setShow] = useState({
    status: false,
  })
  const handleEventOut = () =>
    setShow({
      status: false,
    })
  const handleEventIn = currentImage =>
    setShow({
      whichOne: currentImage,
      status: true,
    })

  return {isShow, handleEventOut, handleEventIn}
}
