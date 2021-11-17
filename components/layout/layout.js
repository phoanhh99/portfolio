<<<<<<< HEAD
import SharedFooter from 'components/container/shared_footer'
import SharedHeader from 'components/container/shared_header'

export default function Layout(props) {
  const {children, isPressed, openIt, closeIt, theme, saveLocal} = props
  return (
    <>
      <SharedHeader
        isPressed={isPressed}
        openIt={openIt}
        closeIt={closeIt}
        theme={theme}
        saveLocal={saveLocal}
      />
=======
import SharedFooter from '../container/shared_footer'
import SharedHeader from '../container/shared_header'
import {createContext} from 'react'
import useTheme from '~/utils/hooks/useTheme'
export const ThemeContext = createContext()
export default function Layout(props) {
  const {children} = props

  return (
    <ThemeContext.Provider value={useTheme()}>
      <SharedHeader />
>>>>>>> upstream/master
      <main>{children}</main>
      <SharedFooter />
    </ThemeContext.Provider>
  )
}
