import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import linkedin from '../images/LI-Logo.png';
import { useSpring, animated } from "react-spring";
import { Modal } from "react-bootstrap";

function Contact(props) {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const handleEmail = (event) => {
    setEmail(event);
    setEmailError(""); // resets error message to empty string; removing the error-related css classes.
  };

  const handleFullName = (event) => {
    setFullName(event);
    setFullNameError(""); // resets error message to empty string; removing the error-related css classes.
  };

  const handleMessage = (event) => {
    setMessage(event);
    setMessageError(""); // resets error message to empty string; removing the error-related css classes.
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

  //If Forms are validated, dispatch is made
  const onSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
    // fetch(`http://127.0.0.1:5000/send-email?recipient=${fullName}&sender=${email}&topic=Hello!&text=${message}`) //query string url
    //   .catch(err => console.error(err))
      fetch(`http://www.justuswitmer.com/send-email?recipient=${fullName}&sender=${email}&topic=Hello!&text=${message}`) //query string url
      .catch(err => console.error(err))
      setFullName('');
      setEmail('');
      setMessage('');
      handleShow();
    };
  };


  return (
    <animated.div style={trans} className='contact-container'>
      <div className='contact-intro'>
        <h3 className='contact-intro-h3'>I am open for full-time work or projects.</h3>
        <div className='contact-intro2'>
        <h3 className='contact-intro2-h3'>
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
      <div className='contact-form-container'>
        <div className='contact-name'>
          <p className='contact-form-container-p'>Name</p>
          <input
            className={`contact-name-input ${fullNameError ? "is-invalid" : ""}`}
            type='text'
            value={fullName}
            onChange={(event) => handleFullName(event.target.value)}
          />
          <div className="invalid-feedback">{fullNameError}</div>
        </div>
        <div className='contact-email'>
          <p className='contact-form-container-p'>Email</p>
          <input
            className={`contact-email-input ${emailError ? "is-invalid" : ""}`}
            type='email'
            value={email}
            onChange={(event) => handleEmail(event.target.value)}
          />
          <div className="invalid-feedback">{emailError}</div>
        </div>
        <div className='contact-message'>
          <p className='contact-form-container-p'>Message</p>
          <textarea
            className={`contact-message-input ${messageError ? "is-invalid" : ""}`}
            type='text'
            rows='10'
            cols='50'
            value={message}
            onChange={(event) => handleMessage(event.target.value)}
          />
          <div className="invalid-feedback">{messageError}</div>
        </div>
        <div className='contact-button'>
          <button
            className='contact-button-send'
            onClick={onSubmit}
          >Send</button>
        </div>
        <Modal
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
      </div>
    </animated.div>
  );
}

export default withRouter(Contact);