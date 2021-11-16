import {useEffect, useState} from 'react'
const matchDark = `(preferes-color-scheme: dark)`
function useTheme() {
  const [theme, setTheme] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia(matchDark).matches
  ) // set default to user media

  const saveLocal = v => {
    localStorage.setItem('theme', v)
    return setTheme(v)
  }
  useEffect(() => {
    const saved = localStorage.getItem('theme') // Check if existed
    saved && setTheme(JSON.parse(saved))
  }, [])

  useEffect(
    () =>
      !theme
        ? (document.documentElement.setAttribute('data-theme', 'cupcake'),
          localStorage.setItem('theme', false))
        : (document.documentElement.setAttribute('data-theme', 'halloween'),
          localStorage.setItem('theme', true)),
    [theme]
  )

  return {theme, saveLocal}
}

export default useTheme
