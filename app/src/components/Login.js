import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Login extends Component{
  constructor(props) {
  	super(props); 
  }
  
  render(){
    return(
        <div className="Login">        
          <form method="POST" action="/api/login">			
            <label for="email">Email:</label>
            <input type="email" name="email" id="e" /><br />			
            <label for="password">Password:</label>
            <input type="password" name="password" id="pass" /><br />
            <input type="submit" value="Login" id="login" />
          </form>  
        </div>
    );
  }
}

export default hot(module)(Login);