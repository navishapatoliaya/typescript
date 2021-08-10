import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import { LoginPage } from './LoginPage';
import  RegisterPage  from './RegistrePage/RegisterPage';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Switch>
            <Route path ="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
