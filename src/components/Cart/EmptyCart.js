import React from "react";
import { Link } from "react-router-dom";
export default function EmptyCart() {
  return (
    <section className="empty-cart section">
      <h2>carro vacío... </h2>
      <Link to="/list" className="btn btn-primary">
        a llenarlo
      </Link>
    </section>
  );
}
