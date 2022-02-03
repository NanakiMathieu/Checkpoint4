import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pagebiere.css";
import Cardbiere from "../Cardbiere/Cardbiere";

function Pagebiere() {
  const [bieres, setBieres] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/beers`).then((res) => {
      console.log(res);
      setBieres(res.data);
    });
  }, []);
  console.log(bieres);

  return (
    <div>
      <div className="bgimg">
        <div>
          <Cardbiere bieres={bieres} />
        </div>
      </div>
    </div>
  );
}

export default Pagebiere;
