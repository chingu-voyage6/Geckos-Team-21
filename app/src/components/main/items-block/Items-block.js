import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import ItemsFilters from './ItemsFilters';
import ItemsList from './ItemsList';

class ItemsBlock extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ItemsFilters />
                <ItemsList />
            </div>
        )
    }
}
ItemsBlock.defaultProps = {
    itemTitle: 'Title',
    src: '#',
    itemDetails: 'detail'
};

export default hot(module)(ItemsBlock);