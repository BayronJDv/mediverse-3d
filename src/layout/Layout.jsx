import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div id="content">
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout