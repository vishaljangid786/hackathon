import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Error from "./components/Error.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Lenis from "lenis";
import Admin from "./pages/Admin.jsx";
import Payment from "./pages/Payment.jsx";
import Uploadss from "./pages/Uploadss.jsx";
import Congrats from "./pages/Congrats.jsx";

const App = () => {

  
  useEffect(()=>{

    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  })

  return (
    <div className="bg-black text-gray-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/uploadss" element={<Uploadss />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="*" element={<Error />} />
        </Routes>      
        <Footer />
    </div>
  );
};

export default App;
