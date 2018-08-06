import React from 'react';
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';
//import img from './file.jpg';


const Item = ({id, title, country, city, price, photos}) => (
    <div className="item-card">
        <h2>{title}</h2>
        <p>{country},{city}</p>        	
        <img src={"api/image/" + photos[0]} alt="" /> 
        <p>Price: {price} <Link to={`/item/${id}`} key={id} className="item-link">details</Link></p>
    </div>
    );


export default hot(module)(Item);