import React from 'react';
import img from './file.jpg';

const Item = ({title, price, photo}) => (
    <div className="item-card">
        <h1>{title}</h1>
         <img src={img} alt="" /> 
        <p>Price: {price} <a className="item-link" href="#">details</a></p>
    </div>
);

export default Item;