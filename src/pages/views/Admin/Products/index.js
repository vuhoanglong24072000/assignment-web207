import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const ProductsManager = ({ products, onRemove }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Product</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <Link className="d-none d-sm-inline-block btn btn-primary" to="/admin/products/productAdd">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>ProductAdd</span>
                    </Link>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Price Sale</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price, priceSale}, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td>{priceSale}</td>
                                        <td>
                                            <Link to={`/admin/edit-product/${id}`}><button className="alert alert-danger" >Sửa</button></Link>
                                            <button className="alert alert-primary ml-2" onClick={() => removeHandle(id)}>Xóa</button>
                                            <Link to={`/admin/detail-product/${id}`}><button className="alert alert-danger ml-2">Detail</button></Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
