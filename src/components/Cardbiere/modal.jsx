/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.css";

function MyVerticallyCenteredModal(props) {
  const { biere, index } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{biere[index].name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="imgbiere"
          src={biere[index].image_url}
          alt={biere[index].name}
          width="100%"
          margin-bottom="30px"
        />
        <h5 className="temps2">degrés {biere[index].ph}%</h5>

        <h5 className="temps2">Description:</h5>
        {biere[index].description.split("&|&").map((etape) => (
          <p key={etape} className="etape">
            {etape}
          </p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
