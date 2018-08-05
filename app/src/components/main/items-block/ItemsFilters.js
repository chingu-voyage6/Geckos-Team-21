import React from 'react';
import {hot} from "react-hot-loader";
import { connect } from 'react-redux';
import {setTextFilter,
        setSortByDate,
        setSortByPrice, 
        setCountryFilter, 
        setCityFilter,
        setSortByCreationDate, 
        setSortByExpirationDate, 
        setCategoryFilter} from '../../../actions/filters';        

const ItemsFilters = (props) => (
    <div>
    <div className="items-filter">
        <input type='text'
        placeholder='search'
        value= {props.filters.text}
        onChange = {(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }}
        />
        <select
        placeholder="select category"
        className="category-filter"
        value={props.filters.category}
        onChange={(e) => {
            props.dispatch(setCategoryFilter(e.target.value))
        }}
        >
            <option value="">All categories</option>
            <option>Games</option>
            <option>Movies</option>
            <option>Books</option>
            <option>Magazines</option>
            <option>Clothes</option>
            <option>Food</option>
            <option>Furniture</option>
            <option>Bikes</option>
            <option>Weird things</option>
        </select>
        <input type='text'
        placeholder='country'
        value={props.filters.country}
        onChange = {(e) => {
            props.dispatch(setCountryFilter(e.target.value));
        }}
        />
        <input type='text'
        placeholder='city'
        value={props.filters.city}
        onChange = {(e) => {
            props.dispatch(setCityFilter(e.target.value));
        }}
        />
        
        <button onClick ={() => {
            props.dispatch(setTextFilter(''));
            props.dispatch(setCategoryFilter(''));
            props.dispatch(setCountryFilter(''));
            props.dispatch(setCityFilter(''));
            props.dispatch(setSortByCreationDate());
        }}>clear all</button>
    </div>
    sort by:<select
          value = {props.filters.sortBy}
          className="sort-type"   
          onChange={(e) => {
            if(e.target.value === 'creation-date'){
                props.dispatch(setSortByCreationDate());
            }else if(e.target.value === 'price'){
                props.dispatch(setSortByPrice());
            }else if(e.target.value === 'expiration-date') {
                props.dispatch(setSortByExpirationDate());
            } 
        }}>
            <option value="creation-date">Date</option>
            <option value="price">Price</option>
            <option value="expiration-date">expiration date</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ItemsFilters);