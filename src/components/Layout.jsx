import React from 'react'
import Footer from './Footer'
import '../styles/components/Layout.css'
import Navbar from '../components/Navbar'

const Layout = ({children}) => (
        <div className="Main">
            <Navbar />
                {children}
            <Footer />
        </div>
    )

export default Layout