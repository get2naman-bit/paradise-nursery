import React from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";
import { selectCartCount } from "./CartSlice.jsx";

function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-icon">❧</span>
        <span>Paradise Nursery</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-nav" to="/cart">
          <span aria-hidden="true">🛒</span> Cart
          <span className="cart-count">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-copy">
            <p className="eyebrow light">MAKE ROOM FOR GREEN</p>
            <h1>Find your little piece of paradise.</h1>
            <p>
              Thoughtful houseplants for brighter rooms, calmer corners, and
              everyday moments of joy.
            </p>
            <button className="button button-light" onClick={() => navigate("/plants")}>
              Get Started <span aria-hidden="true">→</span>
            </button>
            <Link className="hero-about-link" to="/about">Learn about us</Link>
          </div>
        </div>
      </section>
      <AboutUs />
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<main className="page-wrap"><AboutUs /></main>} />
        <Route path="*" element={<main className="page-wrap"><h1>Page not found</h1><Link to="/">Return home</Link></main>} />
      </Routes>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
        <span>Bring a little green home.</span>
      </footer>
    </div>
  );
}
