import React from "react";
//import Product from "./Product";
import { ProductContext } from "../../context/products";
import Filters from "./Filters";
import PageProducts from "./PageProducts";

import { Link } from 'react-router-dom'


export default function ProductList() {

  const { featured } = React.useContext(ProductContext);

  return (
    <>




    <section className="section">
      <h2 className="section-title">Destacados</h2>
      <div className="products-center">
        {
        featured.map(post => (
  <article className="product" key={post._id}>
  <div className="img-container">
    <img src={post.image} alt={post.title || "default title"} />
    <Link to={`featured/${post._id}`} className="btn btn-primary product-link">
          detalles
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


