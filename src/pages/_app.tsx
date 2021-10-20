import type { AppProps /*, AppContext */ } from 'next/app'
import { IconContext } from 'react-icons/lib'

import '../styles/global.scss'
import '../styles/reactIcon.scss'

function MyApp({ Component, pageProps }: AppProps) { 
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <Component {...pageProps} />
    </IconContext.Provider>

  )
}

export default MyApp