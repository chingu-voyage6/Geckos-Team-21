import React from 'react';
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';
//import img from './file.jpg';


const Item = ({id, title, price, photo}) => (
    <div className="item-card">
        <h1>{title}</h1>        	
        	<img src={"api/image/" + photos[0]} alt="" /> 
        	<p>Price: {price} <Link to={`/item/${id}`} key={id} className="item-link">details</Link></p>


export default hot(module)(Item);