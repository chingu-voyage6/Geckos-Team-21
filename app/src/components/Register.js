import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Register extends Component{
  constructor(props) {
  	super(props); 
  }
  

  render(){
    return(
      <div className="Register">        
            <form method="POST" action="/api/register">
			<label for="fname">First name:</label>
			<input type="text" name="fname" id="fname" /><br />
			<label for="lname">Last name:</label>
			<input type="text" name="lname" id="lname" /><br />
			<label for="country">Country:</label>
			<input type="text" name="country" id="country" /><br />
			<label for="city">City:</label>
			<input type="text" name="city" id="city" /><br />
			<label for="email">Email:</label>
			<input type="email" name="email" id="email" /><br />
			<label for="tel">Phone number:</label>
			<input type="tel" name="tel" id="tel" /><br />
			<label for="password">Password:</label>
			<input type="password" name="password" id="password" /><br />
			<input type="submit" value="Register" id="sub" />

		</form>       
      </div>
    );
  }
}

export default hot(module)(Register);