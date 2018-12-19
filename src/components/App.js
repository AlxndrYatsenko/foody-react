import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddDish from './pages/AddDishForm/AddDish';
import MainPage from './pages/MainPage';
import Menu from './Menu/Menu';
import Dish from './pages/Dish/Dish';
import Header from './Header/Header';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/menu/add" component={AddDish} />
        <Route path="/menu/:id" component={Dish} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
