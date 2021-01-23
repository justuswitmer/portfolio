import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player"

function ProjectLEA(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        className='project-primary-modalBtn'
        onClick={handleShow} 
      />
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        tabIndex='0'
      >
        <Modal.Header closeButton id='modalHeader' tabIndex='0'>
          <Modal.Title id='example-modal-sizes-title-lg' tabIndex='0'>
          <p className='construction-note'>Modal is currently under construction</p>
          <p>Lake Elmo Aero</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='card'>
          <ReactPlayer
            className='project-primary-vidPlayer'
            width='100%'
            url="https://vimeo.com/493976119"
            playing={true}
          />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectLEA;