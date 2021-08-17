import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import  LoginPage  from './LoginPage/LoginPage';
import  RegisterPage  from './RegistrePage/RegisterPage';
import { history } from './helper/history';
import HomePage  from './HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddData from "./HomePage/AddData"

function App() {
  return (
    <div className="App">
      
      <Router history={history}>
          <Switch>
            <Route exact path ="/home" component={HomePage} />
            <Route path ="/login" component={LoginPage} />
            <Route path="/" component={RegisterPage} />
            <Redirect from ="*" to="/" />
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
