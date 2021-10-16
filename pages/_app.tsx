import type { AppProps /*, AppContext */ } from 'next/app'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) { 
  return (
        <main>
        <Component {...pageProps} />
        </main>
   
  )
}

export default MyApp