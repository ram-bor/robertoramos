import React from 'react'
import './App.css';
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function App() {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
