import React from 'react'
import './App.css';
import Header from '../Header/Header'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
