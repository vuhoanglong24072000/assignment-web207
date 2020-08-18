import React from 'react'
import PropTypes from 'prop-types'
import { Link,useParams } from 'react-router-dom'

const DetailProduct = ({ products }) => {
    let { id } = useParams();
    
    const product = products.find(product => product.id === id)

    return (
        <div>
            <div>Tên sản phẩm: <h1>{product.name}</h1></div>
            <label className="mt-2">Ảnh:<div><img src={product.image} alt="" width="400" /></div></label>
            <div className="mt-3">Giá: {product.price}</div>
            <div className="mt-3">Mô tả: {product.mota}</div>
            <div className="mt-3">Chi tiết: {product.chitiet}</div>
            <Link to="/admin/products">
            <a className="btn btn-danger text-white mt-3">Back</a>
            </Link>
        </div>
        
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct