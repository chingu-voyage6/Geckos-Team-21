import { createStore, combineReducers } from "redux";
import itemsReducer from '../reducers/itemsReducer';
import filtersReducer from '../reducers/filtersReducer'; 

export default () => {
  const store = createStore(
    combineReducers({
      items: itemsReducer,
      filters: filtersReducer
    })
  );

  return store;
}; 