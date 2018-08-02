import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import {addItem} from './actions/items';
import {setTextFilter, setCategoryFilter, setSortByPrice} from './actions/filters';
import getVisibleItems from './selectors/visibleItems';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
 ////////////////////////////////////////////////
const store = configureStore();

<<<<<<< HEAD
  	fetch('/api/getItems', {credentials: "include"})
      .then( function(response) {
        return response.json();
      })
      .then((responseJson) => {        
        if (responseJson) {          
        for (var i=0; i < responseJson.length; i++) {          
          store.dispatch(addItem(responseJson[i]));
        }
      }
=======
store.dispatch(addItem({title: 'rug', price: 100, category: 'furniture', country: 'Iran', city: 'Gorgan'}));
store.dispatch(addItem({title: 'lamp', price: 300, category: 'furniture', country: 'Russia'}));
store.dispatch(addItem({title: 'spagetti', price: 200, category: 'food',country: 'Iran', city: 'Ramsar'}));
store.dispatch(addItem({title: 'an old movie', price: 600, category: 'movies'}));
store.dispatch(addItem({title: 'an old bike', price: 800, category: 'bikes'}));
>>>>>>> 8f44b46aa9dd986a115cfe8558f075390dbbff5a

      })
      .catch((error) =>{
        console.error(error);
      });

const state = store.getState();

////////////////////////////////////////////////

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
ReactDOM.render(jsx,document.getElementById("root"));