import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '~/components/layout/layout'
import React, {useEffect, useState} from 'react'
import useTheme from '~/utils/hooks/useTheme'
import useAnimation from '~/utils/hooks/useAnimation'
import useOpenSidebar from '~/utils/hooks/useOpenSidebar'
function MyApp({Component, pageProps}) {
  const [mount, setMount] = useState(false)
  const {theme, saveLocal} = useTheme()
  const {
    state: {lightMode, darkMode},
    handleAnimation,
  } = useAnimation()
  const {isPressed, openIt, closeIt} = useOpenSidebar()
  useEffect(() => setMount(true), [])
  if (!mount) return null
  return (
    <Layout
      lightMode={lightMode}
      darkMode={darkMode}
      isPressed={isPressed}
      handleAnimation={handleAnimation}
      openIt={openIt}
      closeIt={closeIt}
      theme={theme}
      saveLocal={saveLocal}
    >
      <Component {...pageProps} theme={theme} />
    </Layout>
  )
}

export default MyApp
