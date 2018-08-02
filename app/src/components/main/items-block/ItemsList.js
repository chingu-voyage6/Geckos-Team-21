import React from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import getVisibleItems from '../../../selectors/visibleItems';

const ItemsList = (props) => (
    <div className="items-list">
        {props.items.map((item) => {
        return <Item key = {item.id} {...item} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state.items, state.filters)
    };
};

export default connect(mapStateToProps)(ItemsList);
