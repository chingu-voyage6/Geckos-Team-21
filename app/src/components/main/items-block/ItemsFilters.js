import React from 'react';
import {hot} from "react-hot-loader";
import { connect } from 'react-redux';
import {setTextFilter, setSortByDate, setSortByPrice, setCountryFilter, setCityFilter,setSortByCreationDate, setSortByExpirationDate} from '../../../actions/filters';

const ItemsFilters = (props) => (
    <div className="items-filter">
        <input type='text'
        placeholder='search'
        value= {props.filters.text}
        onChange = {(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }}
        />
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
        <select
          value = {props.filters.sortBy}   
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
            <option value="expiration-price">expiration date</option>
        </select>
        <button onClick ={() => {
            props.dispatch(setTextFilter(''));
            props.dispatch(setCountryFilter(''));
            props.dispatch(setCityFilter(''));
            props.dispatch(setSortByDate());
        }}>clear all</button>
    </div>
);

const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ItemsFilters);