// filters Reducer
const filtersReducerDefaultState = {
    category: '',
    text: '',
    country: '',
    city: '',
    sortBy: 'creation-date'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
switch(action.type){
    case 'SET_CATEGORY_FILTER':
        return {
            ...state,
            category: action.category
        };
    case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };
    case 'SET_COUNTRY_FILTER':
        return{
            ...state,
            country: action.country
        };
    case 'SET_CITY_FILTER': 
        return{
            ...state,
            city: action.city
        };
    case 'SET_SORT_BY_EXPIRATION_DATE':
        return {
            ...state,
            sortBy: 'expiration-date'
        };
    case 'SET_SORT_BY_PRICE':
        return {
            ...state,
            sortBy: 'price'
        };
    case 'SET_SORT_BY_CREATION_DATE':
        return {
            ...state,
            sortBy: 'creation-date'
        };
    
    default:
            return state; 
}
};

export default filtersReducer;