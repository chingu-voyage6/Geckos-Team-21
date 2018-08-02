import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import ItemsFilters from './ItemsFilters';
import ItemsList from './ItemsList';
import configureStore from '../../../store/configureStore';
import {addItem} from '../../../actions/items';

const store = configureStore();

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