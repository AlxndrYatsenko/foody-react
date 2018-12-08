import React from 'react';
import SingForm from './SingForm';
import OrderHistory from './OrderHistory/OrderHistory';
import Menu from './Menu';
import Comment from './Comment';
import dishList from '../services/menu.json';

const App = () => (
      <>
      <SingForm />
      <OrderHistory />
      <Menu dishList={dishList} />
      <Comment dish={dishList[3]} />
      </>)
                   
export default App;
