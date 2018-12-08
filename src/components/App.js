import React from 'react';
import Header from './Header';
import SingForm from './SingForm/SingForm';
import OrderHistory from './OrderHistory/OrderHistory';
import Menu from './Menu/Menu';
import Comment from './Comment/Comment';
import dishList from '../services/menu.json';

const App = () => (
  <>
    <Header />
    <SingForm />
    <OrderHistory />
    <Menu dishList={dishList} />
    <Comment dish={dishList[3]} />
  </>
);

export default App;
