import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import itemsReducer from '../reducers/itemsReducer';
import filtersReducer from '../reducers/filtersReducer'; 

export default () => {
  const store = createStore(
    combineReducers({
      items: itemsReducer,
      filters: filtersReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
}; 