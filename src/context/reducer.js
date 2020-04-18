import { REMOVE, INCREASE, DECREASE, ADD_TO_CART, CLEAR_CART } from "./actions";

export default (state, action) => {
  switch (action.type) {
    case REMOVE:
      return state.filter(item => item._id !== action.payload);
    case INCREASE:
      return state.map(item => {
        return item._id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : { ...item };
      });
    case DECREASE:
      return state.map(item => {
        return item._id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
    case ADD_TO_CART:
      const { _id, image, title, price } = action.payload;
      let product = { _id, image, title, price, amount: 1 };
      return [...state, product];

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};
