import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
    return (
        <div>
            <div id="header">
                <a href="index.html"><img src="assets/images/logo.png" alt="Image" /></a>
                <ul>
                <li>
                    <a><Link to="/about">Home</Link></a>
                </li>
                <li>
                    <a><Link to="/">Menu</Link></a>
                </li>
                <li>
                    <a href="/locations">Locations</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/aboutus">About Us</a>
                </li>
                </ul>
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header
