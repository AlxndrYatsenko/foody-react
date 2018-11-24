import React from 'react';
import Menu from './Menu';
import dishList from '../services/menu.json';

const App = () => <Menu dishList={dishList} />;
export default App;
