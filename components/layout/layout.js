import SharedFooter from '../container/shared_footer'
import SharedHeader from '../container/shared_header'
import SharedSideBar from '../container/shared_sidebar'
import {useState, useEffect} from 'react'

export default function Layout({children}) {
  const [status, setStatus] = useState(true)

  useEffect(() => {
    status
      ? document.documentElement.setAttribute('data-theme', 'halloween')
      : document.documentElement.setAttribute('data-theme', 'fantasy')
  }, [status])

  return (
    <>
      <SharedHeader theme={status} handleChange={setStatus} />
      <SharedSideBar />
      <main>{children}</main>
      <SharedFooter />
    </>
  )
}
