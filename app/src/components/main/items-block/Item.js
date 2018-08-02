import React from 'react';
import img from './file.jpg';

const Item = ({title, price, photos}) => (	
    <div className="item-card">
        <h1>{title}</h1>        	
        	<img src={"api/image/" + photos[0]} alt="" /> 
        <p>Price: {price} <a className="item-link" href="#">details</a></p>
    </div>
);

export default Item;