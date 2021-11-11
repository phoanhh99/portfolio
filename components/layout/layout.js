import SharedFooter from '../container/shared_footer'
import SharedHeader from '../container/shared_header'
import React, {useEffect, useState} from 'react'

export default function Layout(props) {
  const {
    children,
    lightMode,
    darkMode,
    isPressed,
    handleAnimation,
    handlePress,
    theme,
    saveLocal,
  } = props
  const [mount, setMount] = useState(false)
  useEffect(() => setMount(true), [])
  if (!mount) return null
  return (
    <>
      <SharedHeader
        lightMode={lightMode}
        darkMode={darkMode}
        isPressed={isPressed}
        handleAnimation={handleAnimation}
        handlePress={handlePress}
        theme={theme}
        saveLocal={saveLocal}
      />
      <main>{children}</main>
      <SharedFooter />
    </>
  )
}
