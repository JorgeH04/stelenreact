import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/products";
import { CartContext } from "../../context/cart";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";
export default function ProductDetails() {
  const { _id } = useParams();
  const history = useHistory();

  const { featured } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);
  const productF = featured.find(item => item._id === _id);
  if (featured.length === 0) {
    return <Loading />;
  } else {
    const { image, title, price, description } = productF;
    return (
      <section className="single-product">
        <img src={image} alt={title} className="single-product-image" />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              addToCart(productF);
              history.push("/cart");
            }}
          >
            add to cart
          </button>
        </article>
      </section>
    );
  }
}
