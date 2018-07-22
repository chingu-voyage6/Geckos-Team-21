import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Header from "./header/Header.js";
import Footer from "./footer/Footer.js";
import Main from "./main/Main.js";

class App extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
  		username: 'Noname'
  	}
    
  }

 

   componentDidMount(){
    return fetch('/api/user')
      .then((response) => response.json())
      .then((responseJson) => { 
        console.log(responseJson.username);
        this.setState({
          username: responseJson.username,
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
 

  render(){
    return(
      <div className="App">        
        <Header username={this.state.username} />
        <Main />
        <Footer />        
      </div>
    );
  }
}

export default hot(module)(App);