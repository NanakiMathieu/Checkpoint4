import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Formulaire from "./components/Formulaire/Formulaire";
import Pagebiere from "./components/Pagebiere/Pagebiere";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="formulaire" element={<Formulaire />} />
        <Route path="bieres" element={<Pagebiere />} />
      </Routes>
    </div>
  );
}

export default App;
