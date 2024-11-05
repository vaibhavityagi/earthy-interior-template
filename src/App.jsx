import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="w-[100%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
