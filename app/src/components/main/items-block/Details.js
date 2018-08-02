import React from 'react';
import {hot} from "react-hot-loader";
import { connect } from 'react-redux';

const Details =(props) => {
    console.log(props);
    return (
        <div className="item-details">
			<div className="item-details__details">
				<h1>{props.item.title}</h1>
            <table>
				<tr>
					<th>Category:</th>
					<td>{props.item.category}</td>
				</tr>
				<tr>
					<th>description:</th>
					<td>{props.item.description}</td>
				</tr>
				<tr>
					<th>Country:</th>
					<td>{props.item.country}</td>
				</tr>
				<tr>
					<th>city:</th>
					<td>{props.item.city}</td>
				</tr>
				<tr>
					<th>Price:</th>
					<td>{props.item.price}</td>
				</tr>
				<tr>
					<th>Expiration Date:</th>
					<td>{props.item.expDate}</td>
				</tr>
                <tr>
					<th>Contact info:</th>
					<td>{props.item.phoneNumber}</td>
				</tr>
			</table>
			</div>
			<div className="item-details__photo">
				<img src={props.item.photo}/>
			</div>
        </div>
    );
};
const mapStateToProps = (state, props) => {
    return {
        item: state.items.find((item) => item.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(Details);