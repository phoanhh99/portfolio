import {useEffect, useRef} from 'react'

const useClickOutSide = (sideBarRef, callBack) => {
  const callBackRef = useRef()
  callBackRef.current = callBack
  useEffect(() => {
    const eventListner = e => {
      if (!sideBarRef?.current?.contains(e.target)) {
        callBackRef.current(e)
      }
    }
    document.addEventListener('click', eventListner)
    return () => document.removeEventListener('click', eventListner)
  }, [sideBarRef, callBackRef])
}

export default useClickOutSide
