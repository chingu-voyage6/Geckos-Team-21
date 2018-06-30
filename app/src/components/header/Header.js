import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Header.css";

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

// Banner component
class Banner extends Component{
    render(){
        return(
            <div>
                <h1> clean app! </h1>
                <h2>why wasting when you can share?!</h2>
                <div className="PinkCircle"></div>
                <div className="BlueCircle"></div>
                <div className="YellowCircle"></div>
            </div>   
        )
    }
}

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