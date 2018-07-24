import React from 'react';
import {hot} from "react-hot-loader";

const ItemsFilters = () => (
    <div>
        <input type='text'
        placeholder='search' />
        <select>
            <option>Date</option>
            <option>Price</option>
        </select>
    </div>
);

export default hot(module)(ItemsFilters);