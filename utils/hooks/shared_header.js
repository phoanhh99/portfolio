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
              darkMode: 'animate-pulse ',
            }
          })
        : setState(prev => {
            return {
              ...prev,
              lightMode: 'animate-pulse ',
            }
          })
      : setState(prev => {
          return {
            ...prev,
            lightMode: '',
            darkMode: '',
            style: {},
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
  const [state, setState] = useState({
    theme: true, //Change it to null will make the switch not trigger
    isMounted: false,
  })

  const preventHydration = () => {
    setState(prevState => {
      return {
        ...prevState,
        isMounted: true,
      }
    })
  }
  const saveLocal = v => {
    localStorage.setItem('theme', v)
    setState(prev => {
      return {
        ...prev,
        theme: v,
      }
    })
  }
  useEffect(() => {
    const saved = localStorage.getItem('theme') // Check if existed
    const value = !!saved ? JSON.parse(saved) : undefined
    setState(prev => {
      return {
        ...prev,
        theme: value,
      }
    })
  }, [])

  useEffect(() => {
    !state.theme
      ? (document.documentElement.setAttribute('data-theme', 'fantasy'),
        localStorage.setItem('theme', false))
      : (document.documentElement.setAttribute('data-theme', 'halloween'),
        localStorage.setItem('theme', true))
  }, [state.theme]) //Add state.isMounted so that event handler will triggered properly

  return {state, saveLocal, preventHydration}
}

export {useAnimation, useTheme}
