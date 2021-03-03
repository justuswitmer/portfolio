import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player"
import playBtn from '../images/Miscellaneous/playBtn.png';

function ProjectLEA(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        className='project-primary-modalBtn'
        onClick={handleShow} 
      > <img src={playBtn} />
      </button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton id='modalHeader'>
          <Modal.Title id='example-modal-sizes-title-lg'>
          <p className='project-primary-modal-title'>Lake Elmo Aero</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='project-modal-body'>
            <div className='card'>
            <ReactPlayer
              className='project-primary-vidPlayer'
              width='100%'
              url="https://vimeo.com/493976119"
              playing={true}
            />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectLEA;