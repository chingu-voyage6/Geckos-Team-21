//SET_CATEGORY_FILTER
export const setCategoryFilter = (category) => ({
    type: 'SET_CATEGORY_FILTER',
    category
});

//SET_TEXT_FILTER
export const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
);

//SET_SORT_BY_DATE
export const setSortByDate = () => (
    {
        type: 'SET_SORT_BY_DATE'
    }
);

//SET_SORT_BY_PRICE
export const setSortByPrice = () => (
    {
        type: 'SET_SORT_BY_PRICE'
    }
);

//SET_EXPIRATION_DATE
//export const setExpirationDate = (expDate) => ({
//     type: 'SET_EXPIRATION_DATE',
//     expDate
// });