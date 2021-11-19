import {useEffect, useState} from 'react'

export default function useScrollTo() {
  const [scrollPos, setScrollPos] = useState(0)
  useEffect(() => {
    const updatePos = () => setScrollPos(window.scrollY)
    window.addEventListener('scroll', updatePos)
    return () => window.removeEventListener('scroll', updatePos)
  }, [])

  return {scrollPos}
}
