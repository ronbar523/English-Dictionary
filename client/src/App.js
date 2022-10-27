import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home";

import "./Css/App.css";
import "./Css/Navbar.css";


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home  />} />
        </Routes>
      </main>
      <footer className="mt-5">
        <Footer />
      </footer>
    </>
  );
}

export default App;

