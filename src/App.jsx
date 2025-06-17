import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
function App() {
  return (
    <div>
      <Header />
      <main className="pt-32"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
