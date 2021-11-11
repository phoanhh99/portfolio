import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '~/components/layout/layout'
import React, {useEffect, useState} from 'react'
function MyApp({Component, pageProps}) {
  const [mount, setMount] = useState(false)
  useEffect(() => setMount(true), [])
  if (!mount) return null
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
