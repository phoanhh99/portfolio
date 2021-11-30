import Head from 'next/head'
import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import {SessionProvider} from 'next-auth/react'

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  const getLayout = Component.getLayout || (page => page)
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  )
}

export default MyApp
