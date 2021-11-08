import {useState} from 'react'
function useAnimation() {
  const [state, setState] = useState({
    lightMode: '',
    darkMode: '',
    style: {},
    isPressed: false,
  })

  //Actions
  const handleAnimation = (mode = '', target = '') =>
    mode === 'start'
      ? target !== 'light'
        ? setState(prev => {
            return {
              ...prev,
              darkMode: 'fa-fade',
              style: {
                '--fa-animation-duration': '1s',
                '--fa-fade-opacity': '0.6',
              },
            }
          })
        : setState(prev => {
            return {
              ...prev,
              lightMode: 'fa-fade',
              style: {
                '--fa-animation-duration': '1s',
                '--fa-fade-opacity': '0.6',
              },
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

export {useAnimation}
