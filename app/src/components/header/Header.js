import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Header.css";
import Navbar from "./Navbar";
import Banner from "./Banner";


class Header extends Component{
constructor(props) {
  	super(props);  	
  	}    
 

    render(){
        return(
          <div className="Header">
            <Navbar user={this.props.username} />
            <Banner />
          </div>
        );
      }

}
export default hot(module)(Header);