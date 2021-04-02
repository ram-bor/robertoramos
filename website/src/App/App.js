import React from 'react'
import './App.css';
import Header from '../Header/Header'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Portfolio />
    </React.Fragment>
  );
}

export default App;
