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
      <main>{children}</main>
      <SharedFooter />
    </ThemeContext.Provider>
  )
}
