import React from 'react'
import Header from '../../../../components/Main/Header'
import Footer from '../../../../components/Main/Footer'

import '../../../../assets/css/admin/style.css'

const About = ({products}) => {
    return (
        <div>
            {/* <Header/> */}
                <div id="body">
                    <div id="figure">
                        <img src="assets/images/headline-home.jpg" alt="Image"/>
                        <span id="home">Maecenas pharetra hendrerit eros sed laoreet. <a href="index.html">Find out why.</a></span>
                    </div>
                    <div id="featured">
                        <span class="whatshot"><a href="#">Find out more</a></span>
                        <div>
                            <a href="#"><img src="assets/images/coffee1.jpg" alt="Image"/></a>
                            <a href="#"><img src="assets/images/coffee2.jpg" alt="Image"/></a>
                            <a href="#"><img src="assets/images/coffee3.jpg" alt="Image"/></a>
                        </div>
                    </div>
                    <div className="section"> 
                        <ul>
                            <li>
                                <a href="#"><img src="assets/images/coffee-ingredients.jpg" alt="Image"/></a>
                                <h2><a href="#">Lorem ipsum</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tellus id eros iaculis porttitor eget ultrices mauris. Nulla sodales congue ante, id
                                </p>
                                <a href="#" class="readmore">Read More</a>
                            </li>
                            <li>
                                <a href="#"><img src="assets/images/black-coffee.jpg" alt="Image"/></a>
                                <h2><a href="#">Dolor sit amet</a></h2>
                                <p>
                                    Nulla sodales congue ante, id fermentum mi tincidunt ac. Sed eu vestibulum nisl. Maecenas pharetra hendrerit eros sed laoreet. Maecenas malesuada
                                </p>
                                <a href="#" class="readmore">Read More</a>
                            </li>
                            <li>
                                <a href="blog.html"><img src="assets/images/chocolate.jpg" alt="Image"/></a>
                                <h2><a href="blog.html">Nullam quis</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tellus id eros iaculis porttitor eget ultrices mauris. Nulla sodales congue ante, id
                                </p>
                                <a href="blog.html" class="readmore">Read More</a>
                            </li>
                        </ul>
                        <div>
                            <ul>
                                <li>
                                    <h3><a href="blog.html">Lorem ipsum</a></h3>
                                    <span>28 November 2011</span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit nunc. Donec in velit sed ante interdum condimentum pretium sit amet erat.
                                    </p>
                                    <a href="blog.html" class="readmore">Read more</a>
                                </li>
                                <li>
                                    <h3><a href="blog.html">Dolor sit amet</a></h3>
                                    <span>25 November 2011</span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <a href="blog.html" class="readmore">Read more</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            {/* <Footer/> */}
        </div>
    )
}

About.propTypes = {

}

export default About
