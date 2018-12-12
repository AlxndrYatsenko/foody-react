import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
export const getAllMenuItems = async () => {
  const response = await axios.get('/menu');
  return response.data;
};

export const getAllIngredients = async () => {
  const response = await axios.get('/ingredients');
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

export const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response;
};

export const getMenuItemsWithCategory = async category => {
  const response = category
    ? await axios.get(`/menu?category=${category}`)
    : await axios.get(`/menu`);
  return response.data;
};

export const addDish = async ({
  name,
  price,
  image,
  description,
  ingredients,
  category,
}) => {
  const response = await axios.post('/menu', {
    name,
    price,
    image,
    description,
    ingredients,
    category,
  });

  return response;
};
