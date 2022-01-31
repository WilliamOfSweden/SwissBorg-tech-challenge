import React, { Fragment, ReactNode } from 'react'
import Header from './header'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <Fragment>
    <Header />
    <main>{children}</main>
  </Fragment>
)

export default Layout
