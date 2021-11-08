import SharedFooter from '../container/shared_footer'
import SharedHeader from '../container/shared_header'
import React from 'react'

export default function Layout({children}) {
  return (
    <>
      <SharedHeader />
      <main>{children}</main>
      <SharedFooter />
    </>
  )
}
