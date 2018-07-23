import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import addItem from "./components/addItem.js";
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
	<BrowserRouter>
	<div>
	<Route exact path="/" component={App} />
	<Route exact path="/register" component={Register} />
	<Route exact path="/login" component={Login} />
	<Route exact path="/addNewItem" component={addItem} />
	</div>
	</BrowserRouter>,document.getElementById("root"));