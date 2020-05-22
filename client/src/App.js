import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import "./styles.scss";

import  PrivateRoute  from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
      <PrivateRoute exact path='/bubbles' component={BubblePage} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
