import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/services";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
         <Route path="/About" element={<AboutPage />} />
         <Route path="/contact" element={<ContactPage />} />

       
      
      </Routes>
    </Router>
  );
}

export default App;
