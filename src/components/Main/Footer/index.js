import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
            <div id="footer">
                <div>
                <a href="index.html"><img src="assets/images/logo2.png" alt="Image" /></a>
                <p className="footnote">
                    © Yay!Koffee 2011.<br />All Rights Reserved.
                </p>
                </div>
                <div className="section">
                <ul>
                    <li>
                    <a href="index.html">Home</a>
                    </li>
                    <li className="current">
                    <a href="menu.html">Menu</a>
                    </li>
                    <li>
                    <a href="locations.html">Locations</a>
                    </li>
                    <li>
                    <a href="blog.html">Blog</a>
                    </li>
                    <li>
                    <a href="about.html">About Us</a>
                    </li>
                </ul>
                <div id="connect">
                    <a href="http://freewebsitetemplates.com/go/facebook/" target="_blank" id="facebook">Facebook</a>
                    <a href="http://freewebsitetemplates.com/go/twitter/" target="_blank" id="twitter">Twitter</a>
                    <a href="http://freewebsitetemplates.com/go/googleplus/" target="_blank" id="googleplus">Google+</a>
                    <a href="index.html" id="rss">RSS</a>
                </div>
                <p>
                    This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
                </p>
                </div>
            </div>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
