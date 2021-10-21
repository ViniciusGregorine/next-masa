import React, { ReactNode } from 'react'
import Head from 'next/head'

import Sidebar from '../sidebar'

import style from './styles.module.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'masa' }: Props) => (
  <div className={style.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Sidebar/>
    <div className={style.wrapper}>
      {/* <header>
     <p>this is the header</p> 
      </header> */}
      <main>
        {children}
      </main>
      <footer>
        <hr/>
        <span>I'm here to stay (Footer)</span>
     
      </footer>
    </div>
  </div>
)

export default Layout
