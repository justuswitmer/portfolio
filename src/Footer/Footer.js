import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className='footer-container'>
        <p>This website was built with the following tools: react, javascript, and webflow.</p>
        <p>Designed by <a href='https://www.austinbalken.design'>AB UXD</a> & developed by Justus Witmer</p>
        <br></br>
        <p>Copyright &copy; 2020 Justus Witmer</p>
      </div>
    );
  }
}

export default Footer;
