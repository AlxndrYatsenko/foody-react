import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddMenuElementForm from './AddMenuElementForm/AddMenuElementForm';
import Main from './Header/navList/Main';
import Menu from './Menu/Menu';
import Dish from './Menu/Dish';
import Header from './Header/Header';
import NotFound from './Header/navList/NotFound';
// import { getAllMenuItems } from '../services/api';

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/menu" render={props => <Menu {...props} />} />
        <Route path="/menu/add" component={AddMenuElementForm} />
        <Route path="/menu/:id" component={Dish} />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
