import React, { useState, useEffect } from 'react';
// import Products from './components/Products';
// import Box from './components/Box/Box';
// import Home from './components/Main/NavBar'
// import Product from './components/Product';
import dataFake from './dataFake';
import Routers from './routers';
import apiRequest from './api/productApi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AddProduct from './components/AddProduct';
function App() {

  // const [products, setProducts] = useState(dataFake);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState('green');
  const onHandleClick = () => {
    // setStatus(true);
    setColor('red');
  }
  
  const onHandleRemove = (id) => {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
    apiRequest.remove(id);
  }
  const onHandleAdd = (product) => {
    const newProduct = {
      id: products.length + 1,
      ...product
    }
    setProducts([
      ...products,
      newProduct
    ])
    apiRequest.create(product);
  }

  const onHandleUpdate = (updateProduct) => {
    const newProducts = products.map(
      (product) => (product.id === updateProduct.id ? updateProduct : product) 
      // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    setProducts(newProducts);
    apiRequest.update(updateProduct.id, updateProduct);
};

  // danh sách sản phẩm 
  useEffect(() => {
    const getProduct = async () => {
      try {
        const {data} = await apiRequest.getAll();
        setProducts(data);
      } catch (error){
        console.log('failed to request API: ', error)
      }
    }
    getProduct();
  }, []);
  
  
  return (
      <div className="App">
            <Routers products={products} onHandleAdd={onHandleAdd} onRemove={onHandleRemove} onHandleUpdate={onHandleUpdate} />
      </div>
  )

}
export default App;