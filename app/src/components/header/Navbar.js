import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Navbar.css";
import { Link } from 'react-router-dom';

// navbar component
class Navbar extends Component{
    constructor(props) {
    super(props);
  }

    render(){

        let pages = [['login', '/login'], ['Sign up', '/register'], ['post an ad', '#'], ['categories', '#'], ['about', '#'], ['home', '#']];
        if (this.props.user !== 'Noname') {
            pages[0][0] = "Hello " + this.props.user;
        }
        const navLinks = pages.map((page) => {
            return(
                <Link to={page[1]} key={pages.indexOf(page)}>{page[0]}</Link>
            )
        });

        return(
            <div className="Navbar">
            {navLinks}            
            </div>
        )
    }
}
export default hot(module)(Navbar);