import React from "react";
//import Product from "./Product";
import { ProductContext } from "../../context/products";
import Filters from "./Filters";
import PageProducts from "./PageProducts";

import { Link } from 'react-router-dom'


export default function ProductList() {

  const { products } = React.useContext(ProductContext);

  return (
    <>

<Filters />


    <section className="section">
      <h2 className="section-title"></h2>
      <div className="products-center">
        {
        products.map(post => (
  <article className="product" key={post._id}>
  <div className="img-container">
    <img src={post.image} alt={post.title || "default title"} />
    <Link to={`products/${post._id}`} className="btn btn-primary product-link">
          details
    </Link>
  
  </div>
  <div className="product-footer">
    <p className="product-title">{post.title || "default title"}</p>
    <p className="product-price">${post.price || 0}</p>
  </div>
</article>))}
      </div>
    </section>


 
    </>
  );


}


