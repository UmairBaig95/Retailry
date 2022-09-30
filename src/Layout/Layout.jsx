import React from 'react'
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
function Layout(props) {
  return (
    <>
    <Header />
    <main>{props.children}</main>
    <Footer />
    </>
  )
}

export default Layout
