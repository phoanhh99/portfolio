import {useCallback, useState} from 'react'
export default function useOpenInformation() {
  const [target, setTarget] = useState({
    isOpenModal: false,
    currentRef: '',
    content: {},
  })
  const openInformation = useCallback(
    ({currentTarget}, {image, name, description, alt, url}) => {
      !target.currentRef &&
        setTarget(prev => {
          return {
            ...prev,
            currentRef: currentTarget,
            isOpenModal: true,
            content: {
              image: image,
              name: name,
              description: description,
              alt: alt,
              url: url,
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
          currentRef: '',
          isOpenModal: false,
          content: {
            ...prev.content,
            url: '',
            description: '',
          },
        }
      })
  }, [target.currentRef])

  return {target, openInformation, closeInformation}
}
