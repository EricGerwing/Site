import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/bulb2.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Eric Gerwing</strong> </h1>
                    <br /> Final Year Mechanical Engineering Student<br />
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
