import uuid from 'uuid';
import img from '../components/main/Items-block/file.png';

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
    photo = img,
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
      photo,
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