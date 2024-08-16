import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import './App.css';


function App() {
  const navbarLinks = [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'About Us', href: '/about' },

      // add more links as needed
  ];

  return (
      <div className="App">
        <Navbar links={navbarLinks} />
          <Router>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
          </Router>
          <h1>This is just a placeholder. I can put whatever you want here. </h1>
          <Services />
      </div>
  );
}

export default App;
