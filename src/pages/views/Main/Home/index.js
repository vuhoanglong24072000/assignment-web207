import React from "react";
import { Link } from "react-router-dom";

const Home = ({ products }) => {
  return (
    <div>
        <div id="body">
            <div id="figure">
            <img src="assets/images/headline-menu.jpg" alt="Image" />
            <span>Lorem ipsum dolor sit amet.</span>
            </div>
            <div>
            <a href="menu.html" className="whatshot">What's Hot</a>
            
            <div>
                <ul>
                    {products.map(({id , name , image, price}, index)=>(
                        <li key={index}>
                            <Link to = {`/locations/${id}`}><img src={image} alt="Image" width="200px" height="200px"/></Link>
                            <div>
                            <Link to = {`/locations/${id}`}>{name}</Link>
                            <p className="mb-5">
                            <label className="text-danger ml-1">Giá</label> {price}<label className="text-danger ml-1">Đ</label>
                            </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
