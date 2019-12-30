import React from 'react';
import Routes from './routes'
import Header from './shared/Header'
import Footer from './shared/Footer'
import './Container.css'

function Container () {
    return (
        <div className='container'>
            <Header />
            <Routes />
            <Footer />

        </div>
    )
}

export default Container