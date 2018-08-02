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
<<<<<<< HEAD
    photos = []
=======
    photo = img
>>>>>>> 8f44b46aa9dd986a115cfe8558f075390dbbff5a
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
      photos
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