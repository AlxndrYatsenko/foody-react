import React from 'react';
import Menu from './Menu';
import menuList from '../services/menu.json';

const App = () => <Menu menuList={menuList} />;
export default App;
