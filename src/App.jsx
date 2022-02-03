import React from "react";
import Pagebiere from "./components/Pagebiere/Pagebiere";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Pagebiere />
      </div>
    </div>
  );
}

export default App;
