import type { AppProps } from 'next/app'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from '@styles/GlobalStyles'
import Head from 'next/head'
import tw from 'twin.macro'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

const styles = {
  container: tw`flex flex-col min-h-screen`,
  main: tw`grow py-2 px-4 flex flex-col`,
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <div css={styles.container}>
          <Nav />
          <main css={styles.main}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CacheProvider>
    </>
  )
}

export default App
