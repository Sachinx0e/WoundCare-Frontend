import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter} from "react-router-dom";
import HomePage from './pages/Homepage.js'
import WelcomePage from './pages/WelcomePage.js'
import PatientPage from './pages/PatientPage'
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection:"column", margin: 0,minWidth: "100%", minHeight: "100vh", flex: "1",  backgroundColor: "#F0F0F7"}} >
        <HashRouter basename="/"/> 
        <Route path="/" exact={true} component={WelcomePage} /> 
        <Route path="/home" exact={true} component={HomePage} /> 
        <Route path="/patient/:id" exact={true} component={PatientPage} /> 
      </div>
    );
  }
}

export default App;
