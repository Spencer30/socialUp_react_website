import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import AppPage from './components/AppPage';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" exact><Home /></Route>
      <Route path="/app" exact><AppPage /></Route>
      <Route path="/pricing" exact><Pricing/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
