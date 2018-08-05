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