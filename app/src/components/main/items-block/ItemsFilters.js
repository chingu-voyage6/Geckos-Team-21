import React from 'react';
import {hot} from "react-hot-loader";
import { connect } from 'react-redux';
import {setTextFilter, setSortByDate, setSortByPrice} from '../../../actions/filters';

const ItemsFilters = (props) => (
    <div className="items-filter">
        <input type='text'
        placeholder='search'
        value= {props.filters.text}
        onChange = {(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }}
        />
        <select
          value = {props.filters.sortBy}   
          onChange={(e) => {
            if(e.target.value === 'date'){
                props.dispatch(setSortByDate());
            }else if(e.target.value === 'price'){
                props.dispatch(setSortByPrice());
            }  
        }}>
            <option value="date">Date</option>
            <option value="price">Price</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ItemsFilters);