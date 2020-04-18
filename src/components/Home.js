import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          Nuestros productos
        </Link>
      </Hero>
    
    </>
  );
}
