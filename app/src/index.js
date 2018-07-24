import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(<BrowserRouter>
	<div>
	<Route exact path="/" component={App} />
	<Route exact path="/register" component={Register} />
	<Route exact path="/login" component={Login} />
	</div>
	</BrowserRouter>,document.getElementById("root"));