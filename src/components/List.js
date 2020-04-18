import React, { Component } from 'react'
//import axios from 'axios'
//import {getPosts} from './service'
import { getAll, getOne } from '../context/data';

export const ProductContext = React.createContext();


export default function ProductProvider({ children }) {

   const [loading, setLoading] = React.useState(false);   
   const [products, setProducts] = React.useState([]);
   const [filters, setFilters] = React.useState({
    search: "",
    category: "all",
    shipping: false,
    price: "all"
  });

   const initialUrl = `/api/post`;
   

   const updateFilters = e => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    setFilters({ ...filters, [filter]: filterValue });
  };

   
   React.useEffect(() => {
    async function fetchData() {
      let response = await getAll(initialUrl);
      console.log(response);
     // setNextUrl(response.next);   https://apidbmongo.herokuapp.com/
     // setPrevUrl(response.previous);
     // await loadingPokemon(response.results);
      setProducts(response);
      setLoading(false);
  }
  fetchData();
  }, []);


  React.useLayoutEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    const { search, category, shipping, price } = filters;
    //
    if (category !== "all") {
      newProducts = newProducts.filter(item => item.category === category);
    }
    if (shipping !== false) {
      newProducts = newProducts.filter(item => item.free_shipping === shipping);
    }
    if (price !== "all") {
      newProducts = newProducts.filter(item => {
        if (price === 0) {
          return item.price < 300;
        } else if (price === 300) {
          return item.price > 300 && item.price < 650;
        } else {
          return item.price > 650;
        }
      });
    }
    if (search !== "") {
      newProducts = newProducts.filter(item => {
        let title = item.title.toLowerCase().trim();
        return title.startsWith(search) ? item : null;
      });
    }

    setPage(0);

    setSorted(paginate(newProducts));
  }, [filters, products]);
  


 



    return (
      <ProductContext.Provider
      value={{
        products,
        loading,
        featured,
        sorted,
        page,
        changePage,
        filters,
        updateFilters
      }}
    >
      {children}
    </ProductContext.Provider>

    )
}
