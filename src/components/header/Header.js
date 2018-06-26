import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Header.css";
class Navbar extends Component{
    render(){
        return(
            <div class="Navbar">
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">categories</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">login</a></li>
            </ul>
            </div>
        )
    }
}
class Header extends Component{
    render(){
        return(
          <div className="Header">
            <Navbar />
            <h1> clean app! </h1>
            <div className="PinkCircle"></div>
            <div className="BlueCircle"></div>
            <div className="YellowCircle"></div>
          </div>
        );
      }

}
export default hot(module)(Header);