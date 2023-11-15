import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contract from "./pages/Contract";
import dotenv from "dotenv";
import Prohobition from "./pages/Prohobition";
dotenv.config();

function App() {
  return (
    <body className="d-flex flex-column min-vh-100 backgroundDark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/prohobition/:contractAddress/:title/:platform"
          element={<Prohobition></Prohobition>}
        />
        <Route
          path="/contract/:contractAddress/:title/:platform"
          element={<Contract />}
        />
      </Routes>
      <Footer></Footer>
    </body>
  );
}

export default App;
