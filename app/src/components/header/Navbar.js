import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';

// navbar component
class Navbar extends Component{
    constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
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
                <Link to={page[1]} key={pages.indexOf(page)} onClick={page[2]}>{page[0]}</Link>
            );
        });        
    

        return(
            <div className="Navbar">
            { navLinks }            
            </div>
        )
    }
}

export default hot(module)(Navbar);