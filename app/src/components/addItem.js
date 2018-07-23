import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Register.css";

class addItem extends Component{
  constructor(props) {
  	super(props); 
  }
  

  render(){
  	let categories = ["Games", "Movies", "Books", "Magazines", "Clothes", "Food", "Furniture", "Bikes", "Weird things"];
  	const selectFields = categories.map(function(cat) {
  		return (<option key={categories.indexOf(cat)} value={cat}>{cat}</option>)
  	})
    return(
      <div className="addItem">        
            <form encType="multipart/form-data"  method="POST" action="/api/addItem">
			
			<label htmlFor="title">Title:</label>
			<input type="text" name="title" id="title" /><br />

			<label htmlFor="category">Choose category:</label>
			<select  name="category" id="category">
				{ selectFields }
			</select>
			<br />

			<label htmlFor="country">Country:</label>
			<input type="text" name="country" id="country" /><br />

			<label htmlFor="city">City:</label>
			<input type="text" name="city" id="city" /><br />

			<label htmlFor="description">Description:</label>
			<textarea name="description" id="description" rows="5" defaultValue="Item description"></textarea>
			<br />

			<label htmlFor="expirationDate">Expiration date:</label>
			<input type="date" name="expirationDate" id="expirationDate" /><br />

			<label htmlFor="tel">Phone number:</label>
			<input type="tel" name="tel" id="tel" /><br />


			<label htmlFor="photos">Photos:</label>
			<input type="file" multiple name="photos" accept="image/*" id="photos" /><br />

			<input type="submit" value="Add Item" id="add" />

		</form>       
      </div>
    );
  }
}

export default hot(module)(addItem);