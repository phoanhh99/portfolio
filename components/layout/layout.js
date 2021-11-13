import SharedFooter from '../container/shared_footer'
import SharedHeader from '../container/shared_header'

export default function Layout(props) {
  const {
    children,
    lightMode,
    darkMode,
    isPressed,
    handleAnimation,
    openIt,
    closeIt,
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
        openIt={openIt}
        closeIt={closeIt}
        theme={theme}
        saveLocal={saveLocal}
      />
      <main>{children}</main>
      <SharedFooter />
    </>
  )
}
