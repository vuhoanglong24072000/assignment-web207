import React from 'react'
import Header from '../../../../components/Main/Header'
import Footer from '../../../../components/Main/Footer'

import '../../../../assets/css/admin/style.css'

const Blog = ({products}) => {
    return (
        <div>
            {/* <Header/> */}
            <div id="body">
                <div id="figure">
                <img src="assets/images/headline-blog.jpg" alt="Image" />
                </div>
                <div>
                <a href="blog.html" className="blog">Blog</a>
                <div id="blog">
                    <ul>
                    <li>
                        <div>
                        <div>
                            <span className="month">Dec 2011</span><span className="date">02</span>
                        </div>
                        <h1><a href="blog.html">We Have More Templates for You</a></h1>
                        </div>
                        <p>
                        Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to.
                        </p>
                        <a href="blog.html" className="readmore">Read More</a>
                    </li>
                    <li>
                        <div>
                        <div>
                            <span className="month">Nov 2011</span><span className="date">30</span>
                        </div>
                        <h1><a href="blog.html">We Have More Templates for You</a></h1>
                        </div>
                        <p>
                        Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you’re looking for something different, something special. And we love the challenge of doing something different and something special.
                        </p>
                        <a href="blog.html" className="readmore">Read More</a>
                    </li>
                    <li>
                        <div>
                        <div>
                            <span className="month">Nov 2011</span><span className="date">29</span>
                        </div>
                        <h1><a href="blog.html">We Have More Templates for You</a></h1>
                        </div>
                        <p>
                        Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to.
                        </p>
                        <a href="blog.html" className="readmore">Read More</a>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <h2><a href="blog.html">Free Website Templates</a></h2>
                        <span className="date">02 Dec 2011</span>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue massa. Praesent id fringilla urna. Curabitur sed rutrum nisi.
                        </p>
                        <a href="blog.html" className="readmore">Read More</a>
                    </li>
                    <li>
                        <h2><a href="blog.html">Free Website Templates</a></h2>
                        <span className="date">02 Dec 2011</span>
                        <p>
                        Suspendisse eu justo urna. Cras vitae nisl in diam pretium facilisis ac non sem. Sed aliquet mattis nunc, a eleifend mauris vestibulum quis.
                        </p>
                        <a href="blog.html" className="readmore">Read More</a>
                    </li>
                    <li>
                        <h2><a href="blog.html">Free Website Templates</a></h2>
                        <span className="date">02 Dec 2011</span>
                        <p>
                        Vivamus id est tincidunt ligula tincidunt volutpat a sed nulla. In ut ipsum ligula. Mauris pretium euismod varius. Donec rutrum quam eget arcu vulputate viverra.
                        </p>
                        <a href="blog.html" className="readmore">Read More</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

Blog.propTypes = {

}

export default Blog
