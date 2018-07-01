import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Header from "./header/Header.js";
import Footer from "./footer/Footer.js";
import Main from "./main/Main";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);