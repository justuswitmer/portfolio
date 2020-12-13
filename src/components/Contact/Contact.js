import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import linkedin from '../images/LI-Logo.png';
import { useSpring, animated } from "react-spring";

function Contact(props) {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
  const dispatch = useDispatch();

  const getEmail = () => {
    setEmail('');
  }
  useEffect(() => {
    getEmail();
  }, []);

  //Data fields
  const newMessage = useSelector((state) => state.newMessage);
  const [email, setEmail] = useState(newMessage.email);
  const [fullName, setFullName] = useState(newMessage.fullName);
  const [message, setMessage] = useState(newMessage.message);

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
    if (!email.includes("@")) {
      setEmailError("Invalid Email Format");
    }
    if (!fullName) {
      setFullNameError("Name Cannot Be Blank");
    }
    if (!message) {
      setMessageError("Please Enter a Mesage");
    }
    if (
      !email.includes("@") ||
      !fullName ||
      !message
    ) {
      console.log("Message Error");
      return false;
    }
    return true;
  };

  //If Forms are validated, dispatch is made
  const onSubmit = () => {
    const isValid = validateForm();

    if (isValid) {
      props.history.push("/thanks");
      // add in dispatch details here
      const newMessage = {
        fullName: fullName,
        email: email,
        message: message
      };
      dispatch({
        type: "SEND_MESSAGE",
        payload: newMessage,
      });
    }
  };

  // function ValidateEmail(input) {
  //   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (input.value.match(validRegex)) {
  //     alert("Valid email address!");
  //     document.form1.text1.focus();
  //     return true;
  //   } else {
  //     alert("Invalid email address!");
  //     document.form1.text1.focus();
  //     return false;
  //   }
  // }


  return (
    <animated.div style={trans} className='contact-container'>
      <div className='contact-intro'>
        <h3>You can reach me on</h3>
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
        <h3>or through filling out the form below.</h3>
      </div>
      <div className='contact-form-container'>
        <div className='contact-name'>
          <p className='contact-form-container-p'>Name</p>
          <input
            className={`contact-name-input ${fullNameError ? "is-invalid" : ""}`}
            type='text'
            onChange={(event) => handleFullName(event.target.value)}
          />
          <div className="invalid-feedback">{fullNameError}</div>
        </div>
        <div className='contact-email'>
          <p className='contact-form-container-p'>Email</p>
          <input
            className={`contact-email-input ${emailError ? "is-invalid" : ""}`}
            type='email'
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
      </div>
    </animated.div>
  );
}

export default withRouter(Contact);
