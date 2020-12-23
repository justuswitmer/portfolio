import { prototype } from 'module';
import React, { useState } from 'react';
import { Modal } from "react-bootstrap";

function AboutItem(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>{props.about.profile}</button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton id='modalHeader'>
          <Modal.Title id='example-modal-sizes-title-lg' className='about-modal-title'>
          <p>{props.about.profile}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='card'>
            {props.about.type.map(type =>
              <p>{type}</p>
            )}
          </div>
          <div className='card'>
            <p>{props.about.description}</p>
          </div>
          <div className='card'>
          {props.about.sources.map(source =>
            <ul>
              <li>{source}</li>
            </ul>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AboutItem;