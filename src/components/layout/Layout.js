import React from 'react'
import Navbar from 'components/navbar/Navbar'
import Footer from 'components/footer/Footer'

const Layout = (props) => {
    return (
        <>
        <Navbar />
           {props.children} 
        <Footer />
        </>
    )
}

export default Layout
