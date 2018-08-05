import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// navbar component
class Navbar extends Component{
    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this);
  }
    handleClick(){
        let dropDown = document.querySelector('.dropdown');
        dropDown.classList.contains('dropdown-active')?
        dropDown.classList.remove('dropdown-active'):
        dropDown.classList.add('dropdown-active');
    }
    render(){

        let pages = [['login', '/login'], ['Sign up', '/register'], ['post an ad', '/addNewItem'], ['categories', '#'], ['about', '#'], ['home', '#']];
        if (this.props.user !== '') {
            pages[0][0] = "Hello " + this.props.user;
            pages[0][1] = "#";
            pages[1][0] = "Add item";
            pages[1][1] = "/addNewItem";

        }
        const navLinks = pages.map((page) => {
            return(
                <Link className="navbar-link" to={page[1]} key={pages.indexOf(page)}>{page[0]}</Link>
            )
        });

        return(
            <div>
                <div className="navbar laptop-navbar">
                { navLinks }            
                </div>
                <div className ="navbar mobile-navbar">
                    {navLinks[0]}
                    {navLinks[1]}
                    <button className="bars" onClick={this.handleClick}>
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </button>
                    <div className="dropdown">
                    {navLinks[2]}
                    {navLinks[3]}
                    {navLinks[4]}
                    {navLinks[5]}
                </div>
                </div>
                
            </div>
        )
    }
}

export default hot(module)(Navbar);