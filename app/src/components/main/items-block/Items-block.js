import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import ItemsFilters from './ItemsFilters';
import ItemsList from './ItemsList';

const ItemsBlock = () => (
    <div>
        <ItemsFilters />
        <ItemsList />
    </div>
);


export default hot(module)(ItemsBlock);