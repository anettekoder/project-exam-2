import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddHotelForm from "./AddHotelForm";

export function AddHotelModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new hotel
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new hotel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddHotelForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
