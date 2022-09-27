import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EnquiryForm from "./EnquiryForms";

const btnStyle = {
  backgroundColor: "#001C55",
  color: "#ffff",
};

function EnquiryModal({ hotelName }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={btnStyle}>
        Book now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EnquiryForm hotelName={hotelName} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EnquiryModal;
