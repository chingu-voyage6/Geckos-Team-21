import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Navbar.css";

// navbar component
class Navbar extends Component{
    render(){
        const pages = ['login','post an ad', 'categories', 'about', 'home'];
        const navLinks = pages.map((page) => {
            return(
                <a href="#">{page}</a>
            )
        });
        return(
            <div class="Navbar">
            {navLinks}
            </div>
        )
    }
}
export default hot(module)(Navbar);