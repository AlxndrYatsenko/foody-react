import React from 'react';
import orderHistory from '../services/order-history.json';
import OrderHistory from './OrderHistory';

const App = () => <OrderHistory orders={orderHistory} />;
export default App;
