import SharedFooter from '../container/shared_footer'
import SharedHeader from '../container/shared_header'
import React, {useState, useEffect} from 'react'

export default function Layout({children}) {
  const [status, setStatus] = useState(true)

  useEffect(
    () =>
      !status
        ? document.documentElement.setAttribute('data-theme', 'fantasy')
        : document.documentElement.setAttribute('data-theme', 'halloween'),
    [status]
  )

  return (
    <>
      <SharedHeader theme={status} handleChange={setStatus} />
      <main>{children}</main>
      <SharedFooter />
    </>
  )
}
