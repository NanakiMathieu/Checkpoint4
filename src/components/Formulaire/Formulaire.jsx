import React, { useState } from "react";
import axios from "axios";
import "./Formulaire.css";

function Formulaire() {
  const url = `http://localhost:5000/beers/ajouter`;
  const [data, setData] = useState({
    name: "",
    description: "",
    image_url: "",
    ph: "",
  });

  /** Fonction qui permets de poster la recette sur le back */
  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, data)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
      })
      .catch((error) => error);
  };

  /** Fonction qui mets a jour data avec les valeurs des inputs */

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  return (
    <div>
      <div className="formulaireb">
        <form>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label"
              control="control"
            >
              Nom
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="..."
                name="name"
                value={data.name}
                onChange={(e) => handle(e)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
              <textarea
                className="form-control"
                id="description"
                placeholder="..."
                rows="3"
                name="description"
                value={data.description}
                onChange={(e) => handle(e)}
              />
            </label>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Image
                <input
                  type="text"
                  className="form-control"
                  id="image_url"
                  placeholder="url image_url here"
                  name="image_url"
                  value={data.image_url}
                  onChange={(e) => handle(e)}
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Degré %
                <input
                  type="text"
                  className="form-control"
                  id="ph"
                  placeholder="..."
                  name="ph"
                  value={data.ph}
                  onChange={(e) => handle(e)}
                />
              </label>
            </div>
            <button
              type="button"
              className="btnSubmit"
              onClick={(e) => submit(e)}
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulaire;
