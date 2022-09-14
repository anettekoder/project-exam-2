import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DateRange } from "react-date-range";

const btnStyle = {
  backgroundColor: "#001C55",
  color: "#ffff",
};

function EnquiryModal() {
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

  <DateRange
    editableDateInputs={true}
    onChange={(item) => setState([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={state}
  />;

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
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DateRange />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EnquiryModal;
