import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../../../components/Main/Header'
import Footer from '../../../../components/Main/Footer'
import { useParams } from 'react-router-dom'

import '../../../../assets/css/admin/style.css'

const Locations = ({products}) => {
    let { id } = useParams();
    const product = products.find(product => product.id === id)
    return (
        <div>
            <div id="body">
                <div className="section">
                <ul>
                    <li className="mr-3 mb-5">
                        <a href="#"><img src={product.image} alt="Image"/></a>
                    </li>
                    <li>
                        <h2><a href="#">{product.name}</a></h2>
                        <p>{product.mota}</p>
                        <p>{product.chitiet}</p>
                        <a href="#" class="readmore">Read More</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

Locations.propTypes = {

}

export default Locations
