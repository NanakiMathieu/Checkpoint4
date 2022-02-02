import React from "react";
import Beers from "../../Images/Beers.jpg";
import "./Pagebiere.css";

function Pagebiere() {
  return (
    <div>
      <div className="imgbeers">
        <img src={Beers} alt="beers" />
      </div>
    </div>
  );
}

export default Pagebiere;
