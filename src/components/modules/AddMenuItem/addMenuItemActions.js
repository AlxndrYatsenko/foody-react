import types from './addMenuItemActionTypes';

const addDish = ({
  name,
  price,
  image,
  description,
  ingredients,
  category,
}) => ({
  type: types.ADD,
  payload: { name, price, image, description, ingredients, category },
});

export default { addDish };
