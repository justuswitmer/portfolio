import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Mode from './Mode';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';

// Material UI
import InfoIcon from '@material-ui/icons/Info';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';


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
          <nav className={`navBar ${this.state.mode}`}>
            <main className='mainDiv'>
              <li>
                <Link
                  className={this.state.mode}
                  to="/about">
                  <InfoIcon />
                </Link>
              </li>
              <li>
                <Link
                  className={this.state.mode}
                  to="/portfolio">
                  <VisibilityIcon />
                </Link>
              </li>
              <li>
                <Link
                  className={this.state.mode}
                  to="/contact">
                  <MailOutlineIcon />
                </Link>
              </li>
            </main>
          </nav>
          <Route exact path='/'>
            <Mode
              setMode={this.setMode}
            />
          </Route>

          <Route path='/about'>
            <About />
          </Route >
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
