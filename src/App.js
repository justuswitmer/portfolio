import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/'>
          <Home />
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

      </div>
    </Router>
  );
}

export default App;
