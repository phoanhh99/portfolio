import {useCallback, useState} from 'react'
export default function useOpenInformation() {
  const [target, setTarget] = useState({
    isOpenModal: false,
    currentRef: '',
    content: {},
  })
  const openInformation = useCallback(
    ({currentTarget}, {image, name}) => {
      !target.currentRef &&
        setTarget(prev => {
          return {
            ...prev,
            currentRef: currentTarget,
            isOpenModal: true,
            content: {
              image: image,
              name: name,
            },
          }
        })
    },
    [target.currentRef]
  )

  const closeInformation = useCallback(() => {
    target.currentRef &&
      setTarget(prev => {
        return {
          ...prev,
          currentRef: '',
          isOpenModal: false,
        }
      })
  }, [target.currentRef])

  return {target, openInformation, closeInformation}
}
