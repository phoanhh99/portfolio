import {useState} from 'react'

const useOpenSidebar = () => {
  const [isPressed, setPress] = useState(false)
  const closeIt = () => setPress(false)
  const openIt = () => setPress(true)
  return {isPressed, openIt, closeIt}
}

export default useOpenSidebar
