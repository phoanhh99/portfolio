import {useCallback, useEffect, useState} from 'react'

export default function useScrollTo() {
  const [btnState, setBtnState] = useState({
    visibility: false,
    isBottom: false,
  })

  const [modalState, setModalState] = useState({
    ref: null,
    pos: 0,
    // maxHeight: 0,
    // scrollHeight: 0,
  })

  const getModalPosition = ({target}) => {
    const {scrollTop, clientHeight, scrollHeight} = target
    setModalState({
      ref: target,
      pos: scrollTop,
      maxHeight: clientHeight,
      scrollHeight: scrollHeight,
    })
  }

  useEffect(() => {
    const reachedEnd =
      modalState.scrollHeight - Math.abs(modalState.pos) ===
      modalState.maxHeight
    if (reachedEnd) {
      setBtnState(prev => {
        return {
          ...prev,
          visibility: true,
          isBottom: true,
        }
      })
    } else if (!reachedEnd && modalState.pos > 300) {
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

  useEffect(() => {
    if (modalState.pos === 0 && modalState.ref) {
      modalState.ref.scrollTop = 0
    }
  }, [modalState.pos, modalState.ref])

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

  return {btnState, getModalPosition, scrollToTop, reset}
}
