import type { AppProps } from 'next/app'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from '@styles/GlobalStyles'
import Head from 'next/head'
import tw from 'twin.macro'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import { useRouter } from 'next/router'

const styles = {
  container: ({ pathname }: { pathname: string }) => [
    tw`flex flex-col min-h-screen`,
    pathname === '/' && tw`h-screen [scroll-snap-type: y mandatory] overflow-y-scroll`
  ],
  main: ({ pathname }: { pathname: string }) => [
    tw`grow flex flex-col`,
    pathname !== '/' ? tw`py-2 px-4 max-w-7xl w-full self-center` : tw`pb-2`
  ],
}

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <div css={styles.container({ pathname })}>
          <Nav pathname={pathname} />
          <main css={styles.main({ pathname })}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CacheProvider>
    </>
  )
}

export default App
