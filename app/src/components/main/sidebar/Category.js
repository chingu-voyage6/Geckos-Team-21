import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import { connect } from 'react-redux';
import {setCategoryFilter} from '../../../actions/filters';


const Category =(props) => (
    <div className="category">
    <h1 className="sidebar-header">Categories</h1>
        <div className="category-list">
            <button onClick={(e) => {
                props.dispatch(setCategoryFilter(''));
                }} >All</button>

            <button onClick={(e) => {
                props.dispatch(setCategoryFilter(e.target.value));
                }} value="games">Games</button>

            <button onClick={(e) => {
                props.dispatch(setCategoryFilter(e.target.value));
                }} value="movies">Movies</button>

            <button onClick={(e) => {
                props.dispatch(setCategoryFilter(e.target.value));
                }} value="books">Books</button>

            <button onClick={(e) => {
                props.dispatch(setCategoryFilter(e.target.value));
                }} value="magazines">Magazines</button>

            <button onClick={(e) => {
                props.dispatch(setCategoryFilter(e.target.value));
                }} value="clothes">Clothes</button>

            <button onClick={(e) => {
                props.dispatch(setCategoryFilter(e.target.value));
                }} value="food">Food</button>

            <button onClick={(e) => {
                props.dispatch(setCategoryFilter(e.target.value));
                }} value="furniture">Furniture</button>

            <button onClick={(e) => {
                props.dispatch(setCategoryFilter(e.target.value));
                }} value="bikes">Bikes</button>

            <button onClick={(e) => {
                props.dispatch(setCategoryFilter(e.target.value));
                }} value="weird things">Weird things</button>
        </div>
    </div>
)
const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}
export default connect(mapStateToProps)(Category);