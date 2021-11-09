import {useEffect, useState} from 'react'
function useAnimation() {
  const [state, setState] = useState({
    lightMode: '',
    darkMode: '',
    isPressed: false,
  })

  //Actions
  const handleAnimation = (mode = '', target = '') =>
    mode === 'start'
      ? target !== 'light'
        ? setState(prev => {
            return {
              ...prev,
              darkMode: 'animate-pulse',
            }
          })
        : setState(prev => {
            return {
              ...prev,
              lightMode: 'animate-pulse',
            }
          })
      : setState(prev => {
          return {
            ...prev,
            lightMode: '',
            darkMode: '',
          }
        })

  const handlePress = () =>
    state.isPressed
      ? setState(prevState => {
          return {
            ...prevState,
            isPressed: false,
          }
        })
      : setState(prevState => {
          return {
            ...prevState,
            isPressed: true,
          }
        })

  return {state, handleAnimation, handlePress}
}

function useTheme() {
  const [theme, setTheme] = useState(true)

  const saveLocal = v => {
    localStorage.setItem('theme', v)
    return setTheme(v)
  }
  useEffect(() => {
    const saved = localStorage.getItem('theme') // Check if existed
    const value = !!saved ? JSON.parse(saved) : true
    return setTheme(value)
  }, [])

  useEffect(
    () =>
      !theme
        ? (document.documentElement.setAttribute('data-theme', 'fantasy'),
          localStorage.setItem('theme', false))
        : (document.documentElement.setAttribute('data-theme', 'halloween'),
          localStorage.setItem('theme', true)),
    [theme]
  )

  return {theme, saveLocal}
}

export {useAnimation, useTheme}
