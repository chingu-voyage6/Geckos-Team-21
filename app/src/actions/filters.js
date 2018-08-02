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
//SET_COUNTRY_FILTER
export const setCountryFilter = (country ='') => (
    {
        type: 'SET_COUNTRY_FILTER',
        country
    }
);

//SET_CITY_FILTER
export const setCityFilter = (city = '') => (
    {
        type: 'SET_CITY_FILTER',
        city
    }
)

//SET_SORT_BY_EXPITRATIONDATE
export const setSortByExpirationDate = () => (
    {
        type: 'SET_SORT_BY_EXPIRATION_DATE'
    }
);

//SET_SORT_BY_PRICE
export const setSortByPrice = () => (
    {
        type: 'SET_SORT_BY_PRICE'
    }
);

//SET_SORT_BY_CREATIONDATE
export const setSortByCreationDate = () => (
    {
        type: 'SET_SORT_BY_CREATION_DATE'
    }
);
