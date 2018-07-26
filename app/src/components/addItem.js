import React, { Component} from "react";
import {hot} from "react-hot-loader";


class addItem extends Component{
  constructor(props) {
		super(props); 
		this.state={
			title: '',
			category: 'Games',
			country: '',
			city: '',
			description: '',
			expirationdate: '',
			price: '',
			tel :''
		}
		this.handleInputChange = this.handleInputChange.bind(this);
  }
  
	handleInputChange(e){
		const target = e.target
		this.setState(() => ({
			[target.name] : target.value
		}));
  }
  render(){
  	let categories = ["Games", "Movies", "Books", "Magazines", "Clothes", "Food", "Furniture", "Bikes", "Weird things"];
  	const selectFields = categories.map(function(cat) {
  		return (<option key={categories.indexOf(cat)} value={cat}>{cat}</option>)
  	})
    return(
      <div className="form">  
				<h1>add a new item</h1>      
				<form encType="multipart/form-data"  method="POST" action="/api/addItem">
				
					<label htmlFor="title">Title:</label>
					<input type="text" name="title" id="title" value={this.state.title} onChange={this.handleInputChange} />

					<label htmlFor="category">Choose category:</label>
					<select  name="category" id="category" value={this.state.category}  onChange={this.handleInputChange}>
						{ selectFields }
					</select>

					<label htmlFor="country">Country:</label>
					<input type="text" name="country" id="country" value={this.state.country} onChange={this.handleInputChange}/>

					<label htmlFor="city">City:</label>
					<input type="text" name="city" id="city" value={this.state.city}  onChange={this.handleInputChange} />

					<label htmlFor="description">Description:</label>
					<textarea name="description" id="description" rows="5" value={this.state.description} 
					onChange={this.handleInputChange}></textarea>

					<label htmlFor="expirationDate">Expiration date:</label>
					<input type="date" name="expirationDate" id="expirationDate" value={this.state.expirationdate}  onChange={this.handleInputChange} />

					<label htmlFor="price">Price:</label>
					<input type="text" name="price" id="price" value={this.state.price}  onChange={this.handleInputChange} />

					<label htmlFor="tel">Phone number:</label>
					<input type="tel" name="tel" id="tel" value={this.state.tel} onChange={this.handleInputChange}/>


					<label htmlFor="photos">Photos:</label>
					<input type="file" multiple name="photos" accept="image/*" id="photos" />

					<input type="submit" value="Add Item" id="add" />

				</form>       
      </div>
    );
  }
}

export default hot(module)(addItem);