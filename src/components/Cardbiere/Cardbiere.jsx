/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "./modal";
import "./Cardbiere.css";

function Cardbiere({ bieres }) {
  const [modalShow, setModalShow] = useState([]);

  const onHideModal = () => {
    const hideModal = modalShow.map((res) => false);
    setModalShow(hideModal);
  };

  const onShowModal = (index) => {
    const newModalShow = [...modalShow];
    newModalShow[index] = true;
    setModalShow(newModalShow);
  };

  return (
    <div>
      <div className="flex">
        {bieres.map((biere, index) => (
          <div>
            <Card style={{ width: "300px", height: "300px", margin: "10px" }}>
              <Card.Title
                style={{
                  height: "60px",
                  textAlign: "center",
                  margin: "10px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                {biere.name}
              </Card.Title>

              <Card.Img
                variant="top"
                src={biere.image_url}
                style={{ width: "15%", margin: "0 42%" }}
              />
              <Button
                style={{ color: "white", width: "50%", margin: "0 auto" }}
                onClick={() => onShowModal(index)}
              >
                détail
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow[index]}
                biere={bieres}
                onHide={() => onHideModal()}
                index={index}
                stat="true"
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardbiere;
