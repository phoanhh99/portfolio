import {useState} from 'react'
function useAnimation() {
  const [state, setState] = useState({
    lightMode: '',
    darkMode: '',
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
  return {state, handleAnimation}
}
export default useAnimation
