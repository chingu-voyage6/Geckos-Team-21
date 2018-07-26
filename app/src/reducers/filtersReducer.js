// filters Reducer
const filtersReducerDefaultState = {
    category: '',
    text: '',
    sortBy: 'date'
    // expDate: undefined
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
    case 'SET_SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };
    case 'SET_SORT_BY_PRICE':
        return {
            ...state,
            sortBy: 'price'
        };
    // case 'SET_EXPIRATION_DATE':
    //     return {
    //         ...state,
    //         expDate:action.expDate
    //     };
    default:
            return state; 
}
};

export default filtersReducer;