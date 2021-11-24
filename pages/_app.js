import Head from 'next/head'
import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
function MyApp({Component, pageProps}) {
  const getLayout = Component.getLayout || (page => page)
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
