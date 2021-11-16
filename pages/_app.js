import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '~/components/layout/layout'
import useTheme from '~/utils/hooks/useTheme'
import useOpenSidebar from '~/utils/hooks/useOpenSidebar'

function MyApp({Component, pageProps}) {
  const {theme, saveLocal} = useTheme()
  const {isPressed, openIt, closeIt} = useOpenSidebar()

  return (
    <Layout
      isPressed={isPressed}
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
