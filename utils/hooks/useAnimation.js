import {useState} from 'react'
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
export {useAnimation}
