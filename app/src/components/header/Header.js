import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Navbar from "./Navbar";
import Banner from "./Banner";


const Header = (props) => (
  <div className="Header">
    <Navbar user={this.props.username} />
    <Banner />
  </div>
);
export default hot(module)(Header);