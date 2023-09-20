import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <article className="app">
        <Header />
        <main>About</main>
        <Link to ="/">Home</Link>
        <Link to ="/products">Products </Link>
        <Footer />
      </article>
    );
}

export default About;