import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import { connect } from 'react-redux';
import {setCategoryFilter} from '../../../actions/filters';

class Category extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.dispatch(setCategoryFilter(e.target.value));
        [...e.target.parentNode.childNodes]
        .map((item) => item.classList.remove('active-category'));
        e.target.classList.add('active-category');
    }
    render(){
        return(
            <div className="category">
            <h1 className="sidebar-header">Categories</h1>
                <div className="category-list">
                    <button 
                    className="category-list__item active-category" 
                    onClick= {this.handleClick} 
                    value="" >All</button>
        
                    <button 
                    className="category-list__item" 
                    onClick= {this.handleClick} 
                    value="games">Games</button>
        
                    <button className="category-list__item" onClick= {this.handleClick} value="movies">Movies</button>
        
                    <button className="category-list__item" onClick= {this.handleClick} value="books">Books</button>
        
                    <button className="category-list__item" onClick= {this.handleClick} value="magazines">Magazines</button>
        
                    <button className="category-list__item" onClick= {this.handleClick} value="clothes">Clothes</button>
        
                    <button className="category-list__item" onClick= {this.handleClick} value="food">Food</button>
        
                    <button className="category-list__item" onClick= {this.handleClick} value="furniture">Furniture</button>
        
                    <button className="category-list__item" onClick= {this.handleClick} value="bikes">Bikes</button>
        
                    <button className="category-list__item" onClick= {this.handleClick} value="weird things">Weird things</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}
export default connect(mapStateToProps)(Category);