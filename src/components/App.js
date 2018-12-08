import React from 'react';
import Comment from './Comment';
import SingForm from './SingForm';
import OrderHistory from './OrderHistory/OrderHistory';
import dishList from '../services/menu.json';

const App = () => (
      <>
      <SingForm />
      <OrderHistory />
      <Comment dish={dishList[3]} />
      </>)
                   
export default App;
