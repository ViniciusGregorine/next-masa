import React, { ReactNode } from 'react'
import Link from 'next/link'
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
      <header>
        <nav>
          <Link href="/">
            <a>dashboard</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href="/users">
            <a>Users List</a>
          </Link>{' '}
          | <a href="/api/users">Users API</a>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  </div>
)

export default Layout
