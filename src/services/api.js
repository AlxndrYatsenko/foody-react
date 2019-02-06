import axios from 'axios';

const setBaseURL = () => {
  axios.defaults.baseURL = 'http://localhost:3001';
};
export const getAllMenuItems = async () => {
  setBaseURL();
  const response = await axios.get('/menu');
  return response.data;
};

export const getAllIngredients = async () => {
  setBaseURL();
  const response = await axios.get('/ingredients');
  return response.data;
};

export const getCategories = async () => {
  setBaseURL();
  const response = await axios.get('/categories');
  return response.data;
};

export const getMenuItemById = async id => {
  setBaseURL();
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};

export const getMenuItemsWithCategory = async category => {
  setBaseURL();
  const url = category ? `/menu?category=${category}` : `/menu`;
  const response = await axios.get(url);
  return response.data;
};

export const addItem = async newItem => {
  setBaseURL();
  const response = await axios.post('/menu', newItem);
  return response;
};

export const getAllOrders = async () => {
  setBaseURL();
  const response = await axios.get('/orders');
  return response.data;
};

export const getOrderById = async id => {
  setBaseURL();
  const response = await axios.get(`/orders/${id}`);
  return response.data;
};

export const deleteOrderById = async id => {
  setBaseURL();
  const response = await axios.delete(`/orders/${id}`);
  return response.data;
};

export const addOrder = async newOrder => {
  setBaseURL();
  const response = await axios.post(`/orders`, newOrder);
  return response;
};

export const getCommentsWithItemID = async ItemID => {
  setBaseURL();
  const response = await axios.get(`/comments?ItemID=${ItemID}`);
  return response.data;
};

export const deleteCommentWithID = async id => {
  setBaseURL();
  const response = await axios.delete(`/comments/${id}`);
  return response.status;
};

export const addComment = async newComment => {
  setBaseURL();
  const response = await axios.post(`./comments`, newComment);
  return response.data;
};
