import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./pages/components/About/About";
import { Awards } from "./pages/components/Awards/Awards";
import { Contact } from "./pages/components/Contacts/Contact";
import { Experience } from "./pages/components/Experience/Experience";
import { Home } from "./pages/components/Home/Home";
import { Portofolios } from "./pages/components/Portofolios/Portofolios";
import { Interest } from "./pages/components/Services/Services";
import { Navigation } from "./pages/components/SideBar/AsideBar";
import { Skills } from "./pages/components/Skills/Skills";
import React from "react";

function App() {
  return (
    <div className="main-container">
      <Navigation />
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/service" element={<Interest />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/porto" element={<Portofolios />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
