import React from 'react';
import { render } from 'react-dom';

import App from './App';
import ProductProvider from "./context/products";
import  {CartProvider}  from "./context/cart";

render(
<ProductProvider>
  <CartProvider>
    <App/>
  </CartProvider>
</ProductProvider>, 

document.getElementById('app'));