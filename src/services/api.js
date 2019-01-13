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

export const addItem = async ({
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

export const getAllOrders = async () => {
  const response = await axios.get('/orders');
  return response;
};

export const getOrderById = async id => {
  const response = await axios.get(`/orders/${id}`);
  return response.data;
};

export const deleteOrderById = async id => {
  const response = await axios.delete(`/orders/${id}`);
  return response.data;
};
//+++++++++++++++++++++++++++++++++++++++
export const addOrder = async ({ address, price, rating, date }) => {
  const response = await axios.post(`/orders`, {
    address,
    rating,
    price,
    date,
  });
  return response;
};

export const getCommentsWithItemID = async ItemID => {
  const response = await axios.get(`/comments?ItemID=${ItemID}`);
  return response.data;
};

export const deleteCommentWithID = async id => {
  const response = await axios.delete(`/comments/${id}`);
  return response.status;
};

export const addComment = async newComment => {
  const response = await axios.post(`./comments`, newComment);
  return response.data;
};
