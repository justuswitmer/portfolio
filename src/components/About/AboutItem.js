import React, { useState } from 'react';
import { Modal } from "react-bootstrap";

function AboutItem(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='aboutitem-button'>{props.about.profile}</button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        tabIndex='0'
      >
        <Modal.Header closeButton id='modalHeader' tabIndex='0'>
          <Modal.Title id='example-modal-sizes-title-lg' className='about-modal-title' tabIndex='0'>
          <p>{props.about.profile}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id='aboutitem-modal'>
          <div className='card'>
            {props.about.type.map(type =>
              <p key={type} tabIndex='0'>{type}</p>
            )}
          </div>
          <div className='card'>
            <p tabIndex='0'>{props.about.description}</p>
          </div>
          <div className='card'>
          {props.about.sources.map(source =>
            <ul key={source}>
              <li tabIndex='0'>{source}</li>
            </ul>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AboutItem;