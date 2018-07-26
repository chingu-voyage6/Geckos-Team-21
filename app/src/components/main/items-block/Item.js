import React from 'react';

const Item = ({title, price}) => (
    <div className="item-card">
        <h1>{title}</h1>
        {/* <img src={props.pic} alt="" /> */}
        <p>{price}</p>
    </div>
);

export default Item;