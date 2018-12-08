import React from 'react';
import SingForm from './SingForm/SingForm';
import OrderHistory from './OrderHistory/OrderHistory';
import Menu from './Menu/Menu';
import Comment from './Comment/Comment';
import dishList from '../services/menu.json';

const App = () => (
  <>
    <SingForm />
    <OrderHistory />
    <Menu dishList={dishList} />
    <Comment dish={dishList[3]} />
  </>
);

export default App;
