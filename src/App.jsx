import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/HomePages/Navbar";
// import Footer from "./Components/Footer";
import Home from "./page/Home";
// import ScrollToTop from "./Components/ScrollToTop";  

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop />   */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
         
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
