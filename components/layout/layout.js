import dynamic from 'next/dynamic'
import SharedFooter from '../container/shared/shared_footer'

const SharedHeader = dynamic(
  () => import('../container/shared/shared_header'),
  {
    ssr: false,
  }
)

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
