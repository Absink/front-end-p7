import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/login'
// import Header from './components/Header';




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
        <App />
        </Route>
      <Route path="/Login">
        <Login />
      </Route>
    
    </Router>
      
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
