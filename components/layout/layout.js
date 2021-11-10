import SharedFooter from '../container/shared_footer'
import SharedHeader from '../container/shared_header'
import React from 'react'

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
