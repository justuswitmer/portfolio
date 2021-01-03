import { Route, HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
import Nav from './Nav/Nav';
import About from './About/About';
import Project from './Project/Project';
import Contact from './Contact/Contact';
// import ContactTwo from './Contact/ContactTwo';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import './App.css';

function App(props) {
    return (
      <Router>
        <div className='App'>
          <Nav/>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Contact />
          {/* <ContactTwo /> */}s
          <Footer />
        </div>
      </Router>
    );
}

export default connect(mapStoreToProps)(App);
