import React from "react";
import logo from "../../Images/logoN.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div>
        <nav className="navigation">
          <ul className="first-part">
            <li className="title-nao">
              <img src={logo} alt="icone_logo" className="logo" />
              Nao Brewery
            </li>
          </ul>
          <ul className="second-part">
            <li>Home</li>
            <li>Bières</li>
            <li>Formulaire</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
