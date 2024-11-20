import React, { useContext } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Product from "../API/Product1";
import { ProductContext } from "../contexts/ProductContext";
import TopRatedProducts from "../components/TopRatedProducts ";
import Server from "../components/Server";
export default function Home() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div>
        <Hero />
        <Server />
        <TopRatedProducts />
      </div>
    </>
  );
}
