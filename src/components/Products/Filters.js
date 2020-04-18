import React, { useContext } from "react";
import { ProductContext } from "../../context/products";
export default function Filters() {
  const {
    filters: { search, category, shipping, price },
    updateFilters,
    sorted
  } = useContext(ProductContext);
  return (
    <section className="filters-section">
      <h2 className="section-title">Buscar productos</h2>
      <form className="filters-form">
        <div>


          {/* search input */}
          <div className="form-group">
            <label htmlFor="search">Buscador</label>
            <input
              type="text"
              name="search"
              id="search"
              className="form-control"
              value={search}
              onChange={updateFilters}
            />
          </div>
          {/* end of search form */}









          {/* select category */}
          <div className="form-group">
            <label htmlFor="category">categoría</label>
            <select
              name="name"
              id="category"
              className="form-control"
              value={category}
              onChange={updateFilters}
            >
              <option value="todos">todos</option>
              <option value="cuadros">cuadros</option>
              <option value="bandejas">bandejas</option>
              <option value="adornos">adornos</option>
            </select>
          </div>
          {/* end of category */}








          {/* free shipping */}
          <div className="form-group">
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor="shipping"></label>
          </div>
        </div>
        {/* end of free shipping */}







        {/* price */}
        <div className="price-group">
          <p>precio</p>
          <label>
            <input
              type="radio"
              name="price"
              id="todos"
              value="todos"
              checked={price === "todos"}
              onChange={updateFilters}
            />
            todos
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={updateFilters}
            />
            $0 - $2000
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="2000"
              checked={price === 2000}
              onChange={updateFilters}
            />
            $2000 - $5000
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="5000"
              checked={price === 5000}
              onChange={updateFilters}
            />
            más que $5000
          </label>
        </div>
        {/* end of price   :{sorted.flat().length}  */}
      </form>
      <h6>total de productos  :{sorted.flat().length}</h6>
      <hr />
    </section>
  );
}
