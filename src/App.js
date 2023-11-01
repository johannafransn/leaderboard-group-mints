import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contract from "./pages/Contract";

function App() {
  return (
    <body className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contract/:contractAddress/:platform"
          element={<Contract />}
        />
      </Routes>
      <Footer></Footer>
    </body>
  );
}

export default App;
