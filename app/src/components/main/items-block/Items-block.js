import React, { Component} from 'react';
import {hot} from "react-hot-loader";

class ItemsBlock extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <section className="item-card">
                    <h1>{this.props.itemTitle}</h1>
                    <img src={this.props.src} alt="" />
                    <p>{this.props.itemDetails}</p>
                </section>
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