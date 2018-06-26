import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import './Category.css';

class Category extends Component{
    render(){
        return(
            <div className="category">
            <div className="sidebar-header">Categories</div>
                <ul className="category-list">
                    <li>Games</li>
                    <li>Movies</li>
                    <li>Books</li>
                    <li>Magazines</li>
                    <li>Clothes</li>
                    <li>Food</li>
                    <li>Furniture</li>
                    <li>Bikes</li>
                    <li>Weird things</li>
                </ul>
            </div>
        )
    }
}
export default hot(module)(Category);