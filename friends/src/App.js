import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Link, Route, Switch} from 'react-router-dom'
import Login from './components/Login'

function App() {
  
  return (
    <div className="App">
      <div className="header">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;
