import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Home from "./components/Home";
import ProductFeatured from "./components/Products/ProductFeatured";
import About from "./components/Products/About";
import ProductDetails from "./components/Products/ProductDetails";
import ProductFDetails from "./components/Products/ProductFDetails";

import Product from "./components/Product";


import Update from "./Update";
import Destacados from "./Destacados";


import Cart from "./components/Products/Cart";

function App() {
  return (
  <Router>

  <Nav />
  <Route exact path="/">
          <Home />
          <ProductFeatured />
  </Route>

  <Route exact path="/products">
          <Product />
  </Route>

  <Route
          path="/featured/:_id"
          children={<ProductFDetails></ProductFDetails>}
  ></Route>


<Route path="/destacados" component={Destacados}  />


<Route path="/update" component={Update}  />


  <Route path="/about" component={About} />
          
  <Route
          path="/products/:_id"
          children={<ProductDetails></ProductDetails>}
  ></Route>


<Route path="/cart">
<Cart />
</Route>

</Router>



  );
}

export default App;

