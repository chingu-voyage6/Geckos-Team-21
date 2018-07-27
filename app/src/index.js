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

store.dispatch(addItem({title: 'rug', price: 100, category: 'furniture'}));
store.dispatch(addItem({title: 'lamp', price: 300, category: 'furniture'}));
store.dispatch(addItem({title: 'spagetti', price: 200, category: 'food'}));
store.dispatch(addItem({title: 'an old movie', price: 600, category: 'movies'}));
store.dispatch(addItem({title: 'an old bike', price: 800, category: 'bikes'}));


const state = store.getState();

////////////////////////////////////////////////

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
ReactDOM.render(jsx,document.getElementById("root"));