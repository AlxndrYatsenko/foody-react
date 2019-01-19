import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import s from './App.module.css';
import AppHeader from './AppHeader/AppHeader';
import Spiner from './Spiner/Spiner';

import routes from '../configs/routes';

const Cart = lazy(() =>
  import('../pages/Cart' /* webpackChunkName: "cart-page" */),
);
const Auth = lazy(() =>
  import('../pages/Auth' /* webpackChunkName: "auth-page" */),
);
const Main = lazy(() =>
  import('../pages/Main' /* webpackChunkName: "main-page" */),
);
const Menu = lazy(() =>
  import('../pages/Menu' /* webpackChunkName: "menu-page" */),
);
const AddMenuItem = lazy(() =>
  import('../pages/AddMenuItem' /* webpackChunkName: "addMenuItem-page" */),
);
const MenuItem = lazy(() =>
  import('../pages/MenuItem' /* webpackChunkName: "menuItem-page" */),
);
const OrderHistory = lazy(() =>
  import('../pages/OrderHistory' /* webpackChunkName: "orderHistory-page" */),
);
const Planner = lazy(() =>
  import('../pages/Planner' /* webpackChunkName: "planner-page" */),
);
const Account = lazy(() =>
  import('../pages/Account' /* webpackChunkName: "account-page" */),
);
const About = lazy(() =>
  import('../pages/About' /* webpackChunkName: "about-page" */),
);
const Contact = lazy(() =>
  import('../pages/Contact' /* webpackChunkName: "contact-page" */),
);
const NotFound = lazy(() =>
  import('../pages/NotFound' /* webpackChunkName: "not-Found-page" */),
);
const Delivery = lazy(() =>
  import('../pages/Delivery' /* webpackChunkName: "delivery-page" */),
);

const App = () => (
  <div className={s.wrapper}>
    <AppHeader />

    <Suspense fallback={<Spiner />}>
      <Switch>
        <Route exact path={routes.CART.root} component={() => <Cart />} />
        <Route exact path={routes.AUTH} component={() => <Auth />} />
        <Route exact path={routes.MAIN} component={() => <Main />} />
        <Route
          exact
          path={routes.MENU.root}
          component={props => <Menu {...props} />}
        />
        <Route
          exact
          path={routes.MENU.add}
          component={props => <AddMenuItem {...props} />}
        />

        <Route
          exact
          path={routes.MENU.item}
          component={props => <MenuItem {...props} />}
        />
        <Route exact path={routes.ABOUT} component={() => <About />} />
        <Route exact path={routes.CONTACT} component={() => <Contact />} />
        <Route exact path={routes.DELIVERY} component={() => <Delivery />} />
        <Route
          exact
          path={routes.ORDER_HISTORY}
          render={() => <OrderHistory />}
        />
        <Route exact path={routes.ACCOUNT} component={() => <Account />} />
        <Route exact path={routes.PLANNER} component={() => <Planner />} />
        <Route component={() => <NotFound />} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
