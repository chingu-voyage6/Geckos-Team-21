import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import ItemsFilters from './ItemsFilters';
import ItemsList from './ItemsList';
import configureStore from '../../../store/configureStore';
import {addItem} from '../../../actions/items';

const store = configureStore();

<<<<<<< HEAD
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
=======
const ItemsBlock = () => (
    <div>
        <ItemsFilters />
        <ItemsList />
    </div>
)
>>>>>>> 8f44b46aa9dd986a115cfe8558f075390dbbff5a

export default hot(module)(ItemsBlock);