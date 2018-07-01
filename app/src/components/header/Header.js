import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Header.css";
import Navbar from "./Navbar";
import Banner from "./Banner";


class Header extends Component{
    render(){
        return(
          <div className="Header">
            <Navbar />
            <Banner />
          </div>
        );
      }

}
export default hot(module)(Header);