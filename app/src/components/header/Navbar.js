import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// navbar component
class Navbar extends Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.handleClick= this.handleClick.bind(this);
    }
    handleClick(){
        let dropDown = document.querySelector('.dropdown');
        dropDown.classList.contains('dropdown-active')?
        dropDown.classList.remove('dropdown-active'):
        dropDown.classList.add('dropdown-active');
    }    
  

    pass() {}

    logout() {
        console.log('Starting logout');        
        fetch('/api/logout', {credentials: "include"}).then(function(response) {
        return response;
      }).then(function(response) {

      });
        this.props.user = '';
    }
   

    render(){

        var pages = [['login', '/login', this.pass], ['Sign up', '/register', this.pass]];

        if (this.props.user !== '') {
            pages = [['Hello ' + this.props.user , '#', this.pass], ['Add Item', '/addNewItem', this.pass], ['Logout', '#', this.logout]];

        } else {
            pages = [['login', '/login', this.pass], ['Sign up', '/register', this.pass]];
        }      

            var navLinks = pages.map((page) => {
            return(
                <Link className="navbar-link" to={page[1]} key={pages.indexOf(page)} onClick={page[2]}>{page[0]}</Link>
            );
        });        
    

        return(
            <div>
                <div className="navbar laptop-navbar">
                { navLinks }            
                </div>
                {/* <div className ="navbar mobile-navbar">
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
                </div> */}
                
            </div>
        )
    }
}

export default hot(module)(Navbar);