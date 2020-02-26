import React from 'react';
import './App.css';

import {Link, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import {PrivateRoute} from './components/PrivateRoute'
import FriendsList from './components/FriendsList'

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
      <Switch>
      <PrivateRoute exact path="/protected" component={FriendsList} />
      <Route path="/login" component={Login}/>
      <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
