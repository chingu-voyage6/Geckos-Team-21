// get visible items

const getVisibleItems = (items, {category, text, country, city, sortBy, creationDate }) => {
    return items.filter((item) => {
        const categoryMatch =  category !== ''? item.category.toLowerCase() === category.toLowerCase(): true;
        const textMatch = item.title.toLowerCase().includes(text.toLowerCase());
        const countryMatch = item.country.toLowerCase().includes(country.toLowerCase());
        const cityMatch = item.city.toLowerCase().includes(city.toLowerCase()); 
        
        return  categoryMatch && countryMatch && cityMatch  && textMatch ;
    }).sort((a , b) => {
        if (sortBy === 'expiration-date'){
            return a.expDate < b.expDate ? 1 : -1;
        }else if(sortBy === 'price'){
            return a.price < b.price ? 1 : -1;
        }else if (sortBy === 'creation-date') {
            return a.creationDate < b.creationDate ? 1 : -1;
        }
    });
};

export default getVisibleItems;