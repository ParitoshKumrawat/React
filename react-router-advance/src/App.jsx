import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="bg-black text-white h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/*

         ONE WAY TO MAKE THE NESTED ROUTES BUT NOT RECOMMENDED

        <Route
          path="/contact/phone"
          element={<h1>Phone Number : 1234567890</h1>}
        />
        <Route
          path="/contact/adderess"
          element={<h1>H.01,dfjsld,falana road,dimka colony , [m.p.]</h1>}
        /> 
        
        */}

        {/* RECOMMENDED WAY TO MAKE THE NESTED ROUTES */}

        <Route path="/contact" element={<Contact />}>
          <Route path="phone" element={<h1>Phone Number : 1234567890</h1>} />
          <Route
            path="adderess"
            element={<h1>H.01,dfjsld,falana road,dimka colony , [m.p.]</h1>}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
