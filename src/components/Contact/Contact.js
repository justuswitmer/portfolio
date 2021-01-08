import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import linkedin from '../images/LI-Logo.png';
import { useSpring, animated } from "react-spring";
import { Modal } from "react-bootstrap";
require('dotenv').config()

function Contact(props) {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const openingContact = '<contact>';
  const closingContact = '</contact>';


  const getEmail = () => {
    setEmail('');
  }
  useEffect(() => {
    getEmail();
  }, []);

  //Data fields
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  //For Input Validation
  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  //Handles the setting of each state and resets error fields.
  const handleEmail = (e) => {
    setEmail(e);
    setEmailError(""); // resets error message to empty string; removing the error-related css classes.
    if (!email.includes('@')) {
      setEmailError('Invalid Email Format');
    }
  };

  const handleFullName = (e) => {
    setFullName(e);
    setFullNameError(""); // resets error message to empty string; removing the error-related css classes.
    if (!fullName) {
      setFullNameError('Name Cannot Be Blank');
    }
  };

  const handleMessage = (e) => {
    setMessage(e);
    setMessageError(""); // resets error message to empty string; removing the error-related css classes.
    if (!message) {
      setMessageError('Please Enter a Mesage');
    }
  };

  // Determines if there are any issues with required fields. If no, it returns true.
  const validateForm = () => {
    if (!email.includes('@')) {
      setEmailError('Invalid Email Format');
    }
    if (!fullName) {
      setFullNameError('Name Cannot Be Blank');
    }
    if (!message) {
      setMessageError('Please Enter a Mesage');
    }
    if (
      !email.includes('@') ||
      !fullName ||
      !message
    ) {
      console.log('Message Error');
      return false;
    }
    return true;
  };

  //If Forms are validated
  const handleSubmit = e => {
    const isValid = validateForm();
    if (isValid) {
      setFullName('');
      setEmail('');
      setMessage('');
      handleShow();
    };
  };

  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

  return (
    <animated.div style={trans} className='contact-container'>
      <span className='opening-tag'>{openingContact}</span>
      <div className='contact-intro'>
        <h3 className='contact-intro-h3' tabIndex='0'>I am open for full-time work or projects.</h3>
        <div className='contact-intro2'>
        <h3 className='contact-intro2-h3' tabIndex='0'>
          You can reach me on
          <a
            href="https://www.linkedin.com/in/justus-witmer"
            className='contact-linkedin-link'
          >
            <img
              src={linkedin}
              className='contact-linkedin-image'
              alt='LinkedIn Logo'
            />
          </a>
          or through filling out the form below.
        </h3>
        </div>
      </div>
        <form 
          name="contact" 
          action="/contact" 
          method="post"
          className='contact-form-container'>
          <input type="hidden" name="form-name" value="contact"/>
          <div className='contact-name'>
            <label className='contact-form-container-p'>Name</label>
            <input 
              type="text" 
              name="name"
              value={fullName}
              className={`contact-name-input ${fullNameError ? "is-invalid" : ""}`}
              onChange={(event) => handleFullName(event.target.value)}
            />
            <div className="invalid-feedback">{fullNameError}</div>
          </div>
          <div className='contact-email'>
            <label className='contact-form-container-p'>Email</label>
            <input 
              type="email" 
              name="email"
              value={email}
              className={`contact-email-input ${emailError ? "is-invalid" : ""}`}
              onChange={(event) => handleEmail(event.target.value)}
            />
            <div className="invalid-feedback">{emailError}</div>
          </div>
          <div className='contact-message'>
            <label className='contact-form-container-p'>Message</label>
            <textarea
              name="message" 
              cols="50" 
              rows="10"
              value={message}
              className={`contact-message-input ${messageError ? "is-invalid" : ""}`}  
              onChange={(event) => handleMessage(event.target.value)}
            >
            </textarea>
          </div>
          <div className="invalid-feedback">{messageError}</div>
          <form id='demo-form' action='?' method='POST' data-netlify-recaptcha="true" data-netlify="true">
            <button 
              type="submit" 
              className='contact-button-send'
              data-callback={onSubmit}
              data-sitekey={process.env.SITE_RECAPTCHA_KEY}
            >Send
            </button>
          </form>
        </form>
      <span className='contact-closing-tag'>{closingContact}</span>
    </animated.div>
  );
}

export default withRouter(Contact);


{/* <form name='contact' method='POST' data-netlify='true' className='contact-form-container' >
        <div className='contact-name'>
          <label for='for' className='contact-form-container-p'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            className={`contact-name-input ${fullNameError ? "is-invalid" : ""}`}
            // value={fullName}
            // onChange={(event) => handleFullName(event.target.value)}
          />
          <div className="invalid-feedback">{fullNameError}</div>
        </div>
        <div className='contact-email'>
          <label className='contact-form-container-p'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            className={`contact-email-input ${emailError ? "is-invalid" : ""}`}
            // value={email}
            // onChange={(event) => handleEmail(event.target.value)}
          />
          <div className="invalid-feedback">{emailError}</div>
        </div>
        <div className='contact-message'>
          <label className='contact-form-container-p'>Message</label>
          <textarea
            id='message'
            name='message'
            // rows='10'
            // cols='50'
            className={`contact-message-input ${messageError ? "is-invalid" : ""}`}
            // value={message}
            // onChange={(event) => handleMessage(event.target.value)}
          />
          <div className="invalid-feedback">{messageError}</div>
        </div>
        <div className='contact-button'>
          <button
            type='submit'
            className='contact-button-send'
            // onClick={onSubmit}
          >Send</button>
        </div>
        {/* <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className='contact-modal'
        >
          <Modal.Header closeButton id='modalHeader' className='contact-modal-header'>
            <Modal.Title id='example-modal-sizes-title-lg'>
            <p>Thanks for contacting me! I will respond as soon as I can.</p>
            </Modal.Title>
          </Modal.Header>
        </Modal>
      </form> */}