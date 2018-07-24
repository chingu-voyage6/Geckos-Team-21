import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Login extends Component{
  constructor(props) {
  	super(props); 
  }
  
  render(){
    return(
        <div className="form">
          <h1>Login form</h1>        
          <form method="POST" action="/api/login">			
            <label htmlFor="e">Email:</label>
            <input type="email" name="email" id="e" /><br />			
            <label htmlFor="pass">Password:</label>
            <input type="password" name="password" id="pass" /><br />
            <input type="submit" value="Login" id="login" />
          </form>  
        </div>
    );
  }
}

export default hot(module)(Login);