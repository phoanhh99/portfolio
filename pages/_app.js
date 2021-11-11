import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '~/components/layout/layout'
import {useTheme} from '~/utils/hooks/useTheme'
import {useAnimation} from '~/utils/hooks/useAnimation'
function MyApp({Component, pageProps}) {
  const {
    state: {lightMode, darkMode, isPressed},
    handleAnimation,
    handlePress,
  } = useAnimation()

  const {theme, saveLocal} = useTheme()

  return (
    <Layout
      lightMode={lightMode}
      darkMode={darkMode}
      isPressed={isPressed}
      handleAnimation={handleAnimation}
      handlePress={handlePress}
      theme={theme}
      saveLocal={saveLocal}
    >
      <Component
        {...pageProps}
        lightMode={lightMode}
        darkMode={darkMode}
        isPressed={isPressed}
        handleAnimation={handleAnimation}
        handlePress={handlePress}
        theme={theme}
        saveLocal={saveLocal}
      />
    </Layout>
  )
}

export default MyApp
