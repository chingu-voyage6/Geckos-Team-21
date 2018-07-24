import React from 'react';
import {hot} from "react-hot-loader";
import { BrowserRouter, Route } from 'react-router-dom';
import App from "../components/App.js";
import Register from "../components/Register.js";
import Login from "../components/Login.js";
import addItem from "../components/addItem.js";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addNewItem" component={addItem} />
        </div>
	</BrowserRouter>
);

export default hot(module)(AppRouter);