import uuid from 'uuid';

// ADD_ITEM
export const addItem = (
  {
    title = '',
    category = '',
    price = 0,
    country= '',
    city = '',
    description = '',
    expDate = 0,
    phoneNumber = 0,
    photos = [],
    creationDate = 0    
  } = {}
) => (
  {
    type: 'ADD_ITEM',
    item: {
      id: uuid(),
      title,
      category,
      price,
      country,
      city,
      description,
      expDate,
      phoneNumber,
      photos,
      creationDate
    }
  }
);

//REMOVE_ITEM
export const removeItem = ({id} = {}) => (
  {
    type: 'REMOVE_ITEM',
    id
  }
);

//EDIT_ITEM