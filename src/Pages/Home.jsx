import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <article className="app">
      <Header />
      <main>Home</main>
      <Link to ="/products">Products</Link>
      <Link to ="/about">About </Link>
      <Footer />
    </article>
  );
}

export default Home;
