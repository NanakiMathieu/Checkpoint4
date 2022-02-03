import React from "react";
import { Link } from "react-router-dom";

import logo from "../../Images/logoN.jpg";
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
            {/* <Link to="/" className="second-part">
              Home
            </Link> */}
            <Link to="/formulaire" className="second-part">
              Formulaire
            </Link>
            <Link to="/bieres" className="second-part">
              Bières
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
