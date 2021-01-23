import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player"

function ProjectFI(props) {
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
          <p>financeIt</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='card'>
          <ReactPlayer
            className='project-primary-vidPlayer'
            width='100%'
            url="https://vimeo.com/493975723"
            playing={true}
          />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectFI;