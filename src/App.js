import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Header from "./Header.js";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        
      </div>
    );
  }
}

export default hot(module)(App);