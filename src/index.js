import React from 'react';
import ReactDOM from 'react-dom';
import render from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter,
         Routes,
        Route } from 'react-router-dom';

import Home from './Home.jsx';
import Manifesto from './Manifesto.js';
import Wallet from './Wallet.js';
import Marketplace from './Marketplace';
const rootElement = document.getElementById("root");
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  // basename="/wva_minting_dapp"
  // "homepage": "https://mc-akil.github.io/wva_minting_dapp",
  
  ReactDOM.render(
  //  render(
    
      <BrowserRouter basename="/wva_minting_dapp">
        <Routes>
          <Route path="/" element={<App />} >
              <Route path="Home" element={<Home />} />
              <Route path="Manifesto" element={<Manifesto />} />
              <Route path= "Marketplace" element={<Marketplace />} />
              <Route path="Wallet" element={<Wallet />} />
          </Route>   
        </Routes>
      </BrowserRouter>,
      rootElement
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



reportWebVitals();
