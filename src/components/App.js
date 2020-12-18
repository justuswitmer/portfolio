import { Route, HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Component } from 'react';
import Nav from './Nav/Nav';
import About from './About/About';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';

import './App.css';

class App extends Component {
  // state = {
  //   mode: document.cookie.split('=')[1]
  // }
  state = {
    inDarkTheme: true,
  }

  // setMode = (evt) => {
  //   let mode = evt.target.value;

  //   document.cookie = `mode=${mode}`
  //   this.setState({
  //     mode: mode
  //   });
  //   console.log(document.cookie.split('=')[1]);
    
  // }
  setTheme = (property) => {
    this.setState({
      inDarkTheme: property
    });
    console.log(this.state.inDarkTheme);
  }
  render() {
    return (
      <Router>
        <div className={this.state.inDarkTheme === true ? 'App dark': 'App light'}>
          <Nav
            setTheme={this.setTheme}
            inDarkTheme={this.state.inDarkTheme}
          />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Contact />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
