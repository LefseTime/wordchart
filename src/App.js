import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="body">
          
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
