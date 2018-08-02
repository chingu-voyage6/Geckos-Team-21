import React from 'react';
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';
//import img from './file.jpg';

<<<<<<< HEAD
const Item = ({title, price, photos}) => (	
    <div className="item-card">
        <h1>{title}</h1>        	
        	<img src={"api/image/" + photos[0]} alt="" /> 
        <p>Price: {price} <a className="item-link" href="#">details</a></p>
=======
const Item = ({id, title, price, photo}) => (
    <div className="item-card">
        <h1>{title}</h1>
        <img src={photo} alt="" /> 
        <p>Price: {price} <Link to={`/item/${id}`} key={id} className="item-link">details</Link></p>
>>>>>>> 8f44b46aa9dd986a115cfe8558f075390dbbff5a
    </div>
);

export default hot(module)(Item);