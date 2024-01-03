import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Causes from "../components/pages/Causes";
import Gallery from "../components/pages/Gallery";
import Blog from "../components/pages/Blog";
import Contact from "../components/pages/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/causes" element={<Causes />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
