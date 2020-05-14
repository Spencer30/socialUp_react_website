import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import AppPage from './components/AppPage';
import Pricing from './components/Pricing';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" exact><Home /></Route>
      <Route path="/app" exact><AppPage /></Route>
      <Route path="/pricing" exact><Pricing/></Route>
      <Route path="/about" exact><AboutPage/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
