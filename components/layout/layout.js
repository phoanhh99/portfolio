import SharedFooter from '../container/shared_footer'
import SharedHeader from '../container/shared_header'

import useTheme from '~/utils/hooks/useTheme'
import useAnimation from '~/utils/hooks/useAnimation'
import useOpenSidebar from '~/utils/hooks/useOpenSidebar'
export default function Layout({children}) {
  const {theme, saveLocal} = useTheme()
  const {
    state: {lightMode, darkMode},
    handleAnimation,
  } = useAnimation()
  const {isPressed, openIt, closeIt} = useOpenSidebar()
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
