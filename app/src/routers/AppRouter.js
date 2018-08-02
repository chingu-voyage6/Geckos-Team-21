import React from 'react';
import {hot} from "react-hot-loader";
import { BrowserRouter, Route } from 'react-router-dom';
import App from "../components/App";
import Register from "../components/Register";
import Login from "../components/Login";
import addItem from "../components/addItem";
import Details from '../components/main/items-block/Details'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addNewItem" component={addItem} />
            <Route path="/item/:id" component={Details} />
        </div>
	</BrowserRouter>
);

export default hot(module)(AppRouter);