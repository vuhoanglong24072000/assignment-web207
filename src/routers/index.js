import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from '../pages/views/Admin/AddProduct';

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'

// link
import {Link} from "react-router-dom";
import dataFake from '../dataFake';
import DetailProduct from '../pages/views/Admin/DetailProduct';
import EditProduct from '../pages/views/Admin/EditProduct';
//axios
// import axios from "axios";
import productApi from "../api/productApi";
import Aboutus from '../pages/views/Main/Aboutus';
import Locations from '../pages/views/Main/Locations';
import Blog from '../pages/views/Main/Blog';


// const Routers = ({ products, onRemove, onHandleAdd}) => {
const Routers = ({ products, onRemove, onHandleAdd, onHandleUpdate}) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const [status, setStatus] = useState(false);
    const showFormAdd = () => {
        setStatus(true)
    }
    // //
    // const [products, setproducts] = useState([]);
    
    // const removeProduct = (id) => {
    //     console.log(id);
    //     const newData = products.filter((product) => product.id !== id);
    //     console.log(newData);
    //     setproducts(newData);
    //     productApi.remove(id);
    //     alert("Bạn chắc chắn muốn xóa sản phẩm này");
    //   };
    // const onHandleAdd = (product) => {
    //     console.log(product);
    //     setproducts([...products, product]);
    //     productApi.create(product);
    // };
    // const onHandleUpdate = (updateProduct) => {
    //     const newProducts = products.map(
    //         (product) => (product.id === updateProduct.id ? updateProduct : product) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    //     );
    //     setproducts(newProducts);
    //     productApi.update(updateProduct.id, updateProduct);
    //     //console.log(updateProduct.id);
    // };
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products}/>
                            </Route>
                            <Route exact path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} />
                            </Route>
                            <Route exact path="/admin/products/productAdd">
                                <AddProduct onAdd={onHandleAdd}/>
                            </Route>
                            <Route path="/admin/edit-product/:id">
                                <EditProduct products={products} onAdd={onHandleUpdate}/>
                            </Route>
                            <Route path="/admin/detail-product/:id">
                                <DetailProduct products={products} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                            <Route path="/about" exact>
                                <About products = {products}/>
                            </Route>
                            <Route path="/aboutus" exact>
                                <Aboutus products = {products}/>
                            </Route>
                            <Route path="/locations/:id" exact>
                                <Locations products = {products}/>
                            </Route>
                            <Route path="/blog" exact>
                                <Blog products = {products}/>
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
