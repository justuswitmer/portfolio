import { HashRouter as Router } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';


class App extends Component {
  state = {
    mode: document.cookie.split('=')[1]
  }

  setMode = (evt) => {
    let mode = evt.target.value;

    document.cookie = `mode=${mode}`
    this.setState({
      mode: mode
    })
  }
  render() {
    return (
      <Router>
        <div className={`App ${this.state.mode}`}>
          {/* <nav className={`navBar ${this.state.mode}`}>
            <main className='mainDiv'>
              <label>
                <input
                  type='radio'
                  name='mode'
                  value='light'
                  onClick={this.setMode}
                />Light Mode
                </label>
              <label>
                <input
                  type='radio'
                  name='mode'
                  value='dark'
                  onClick={this.setMode}
                />Dark Mode
                </label>
            </main>
          </nav> */}
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
