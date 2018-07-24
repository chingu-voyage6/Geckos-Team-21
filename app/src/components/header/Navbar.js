import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';

// navbar component
class Navbar extends Component{
    constructor(props) {
    super(props);
  }

    render(){

        let pages = [['login', '/login'], ['Sign up', '/register'], ['post an ad', '#'], ['categories', '#'], ['about', '#'], ['home', '#']];
        if (this.props.user !== '') {
            pages[0][0] = "Hello " + this.props.user;
            pages[0][1] = "#";
            pages[1][0] = "Add item";
            pages[1][1] = "/addNewItem";

        }
        const navLinks = pages.map((page) => {
            return(
                <Link to={page[1]} key={pages.indexOf(page)}>{page[0]}</Link>
            )
        });

        return(
            <div className="Navbar">
            { navLinks }            
            </div>
        )
    }
}

export default hot(module)(Navbar);