import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from "../../context/cart";
export default function CartItem({ _id, image, title, price, amount }) {
  // cart context
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(
    CartContext
  );
  return (
    <article className="cart-item" key={_id}>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => {
            removeItem(_id);
          }}
        >
          eliminar
        </button>
      </div>
      <div>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => {
            increaseAmount(_id);
          }}
        >
          <FaAngleUp />
        </button>
        <p className="item-amount">{amount}</p>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => {
            decreaseAmount(_id, amount);
          }}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}
