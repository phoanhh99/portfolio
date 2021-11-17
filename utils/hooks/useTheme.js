import {useEffect, useState} from 'react'
function useTheme() {
  const [theme, setTheme] = useState(true) // set default to user media

  const saveLocal = v => {
    localStorage.setItem('theme', v)
    return setTheme(v)
  }
  useEffect(() => {
    const saved = localStorage.getItem('theme') // Check if existed
    saved
      ? setTheme(JSON.parse(saved))
      : setTheme(
          window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        )
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
