// get visible items

const getVisibleItems = (items, {category, text, sortBy }) => {
    return items.filter((item) => {
        const categoryMatch =  category !== ''? item.category === category: true;
        const textMatch = item.title.toLowerCase().includes(text.toLowerCase()) 
        // ||  item.description.toLowerCase().includes(text.toLowerCase())  
        ;
        
        return  categoryMatch && textMatch ;
    }).sort((a , b) => {
        if (sortBy === 'date'){
            return a.expDate < b.expDate ? 1 : -1;
        }else if(sortBy === 'price'){
            return a.price < b.price ? 1 : -1;
        }
    });
};

export default getVisibleItems;