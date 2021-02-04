import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

function AboutItem(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        onClick={handleShow} 
        className='aboutitem-button'
      ><img 
          className='aboutitem-button-img' 
          src={props.store.setTheme === true ? props.about.darkLogo : props.about.lightLogo}
          alt={props.about.profile}
        />
      </button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        tabIndex='0'
      >
        <Modal.Header closeButton id='modalHeader'>
          <Modal.Title id='example-modal-sizes-title-lg' className='about-modal-title'>
          {/* <p className='construction-note'>Modal under construction</p> */}
          <p>{props.about.profile}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id='aboutitem-modal'>
          <div className='card'>
            <h3>Type</h3>
            {props.about.type.map(type =>
              <p key={type}>{type}</p>
            )}
          </div>
          <div className='card'>
            <h3>Description</h3>
            <p>{props.about.description}</p>
          </div>
          <div className='card'>
            <h3>Sources</h3>
          {props.about.sources.map(source =>
            <ul key={source}>
              <li>{source}</li>
            </ul>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default connect(mapStoreToProps)(AboutItem);