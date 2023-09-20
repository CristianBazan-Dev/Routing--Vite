import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
function Products(props) {
    return (
        <article className="app">
        <Header />
        <main>Products</main>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Footer />
      </article>
    );
}

export default Products;