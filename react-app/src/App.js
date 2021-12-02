import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import OurRoutes from './OurRoutes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Nav />
      <OurRoutes />
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <p className="title">
            Medium hero
          </p>
          <p className="subtitle">
            Medium subtitle
          </p>
        </div>
      </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
