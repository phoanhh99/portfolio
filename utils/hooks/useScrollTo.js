import {useCallback, useEffect, useState} from 'react'

export default function useScrollTo() {
  const [btnState, setBtnState] = useState({
    visibility: false,
    isBottom: false,
    dir: null,
  })

  const [modalState, setModalState] = useState({
    ref: null,
    pos: null,
    maxHeight: null,
    scrollHeight: null,
  })

  const getModalPosition = ({target}) => {
    const {scrollTop, clientHeight, scrollHeight} = target
    setModalState(prev => {
      if (prev.pos > scrollTop) {
        setBtnState(prev => {
          return {
            ...prev,
            dir: 'up',
          }
        })
      } else {
        setBtnState(prev => {
          return {
            ...prev,
            dir: 'down',
          }
        })
      }
      return {
        ...prev,
        ref: target,
        pos: scrollTop,
        maxHeight: clientHeight,
        scrollHeight: scrollHeight,
      }
    })
  }

  useEffect(() => {
    if (!modalState.scrollHeight || !modalState.maxHeight) return
    const reachedEnd =
      modalState.scrollHeight - Math.abs(modalState.pos) <
      modalState.maxHeight + 300
    if (reachedEnd) {
      setBtnState(prev => {
        return {
          ...prev,
          visibility: true,
          isBottom: true,
        }
      })
    } else if (
      !reachedEnd &&
      Math.abs(modalState.pos) + modalState.maxHeight <
        modalState.scrollHeight &&
      modalState.pos > 100
    ) {
      setBtnState(prev => {
        return {
          ...prev,
          visibility: true,
          isBottom: false,
        }
      })
    } else {
      setBtnState(prev => {
        return {
          ...prev,
          visibility: false,
          isBottom: false,
        }
      })
    }
  }, [modalState.maxHeight, modalState.pos, modalState.scrollHeight])

  const scrollToTop = () => {
    setModalState(prev => {
      return {
        ...prev,
        pos: 0,
      }
    })
  }

  const scrollToBottom = () => {
    setModalState(prev => {
      return {
        ...prev,
        pos: 'bottom',
      }
    })
  }

  useEffect(() => {
    if (modalState.pos === 0 && modalState.ref) {
      modalState.ref.scrollTop = 0
    }
    if (modalState.pos === 'bottom' && modalState.ref) {
      modalState.ref.scrollTop = modalState.scrollHeight
    }
  }, [modalState.pos, modalState.ref, modalState.scrollHeight])

  const reset = useCallback(() => {
    setBtnState({
      isBottom: false,
      visibility: false,
    })
    setModalState({
      ref: null,
      pos: 0,
    })
  }, [])

  return {btnState, getModalPosition, scrollToTop, scrollToBottom, reset}
}
