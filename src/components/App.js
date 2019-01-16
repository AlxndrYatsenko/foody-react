import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import s from './App.module.css';
import AppHeader from './AppHeader/AppHeader';
import Spiner from './Spiner/Spiner';

import routes from '../configs/routes';

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
  import('../pages/NotFound' /* webpackChunkName: "notFound-page" */),
);
const Delivery = lazy(() =>
  import('../pages/Delivery' /* webpackChunkName: "delivery-page" */),
);

const App = () => (
  <div className={s.wrapper}>
    <AppHeader />

    <Switch>
      <Suspense fallback={<Spiner />}>
        <Route exact path={routes.AUTH} render={() => <Auth />} />
        <Route exact path={routes.MAIN} render={() => <Main />} />
        <Route
          exact
          path={routes.MENU.root}
          render={props => <Menu {...props} />}
        />
        <Route
          path={routes.MENU.add}
          render={props => <AddMenuItem {...props} />}
        />

        <Route
          path={routes.MENU.item}
          render={props => <MenuItem {...props} />}
        />
        <Route path={routes.ABOUT} render={() => <About />} />
        <Route path={routes.CONTACT} render={() => <Contact />} />
        <Route path={routes.DELIVERY} render={() => <Delivery />} />
        <Route path={routes.ORDER_HISTORY} render={() => <OrderHistory />} />
        <Route path={routes.ACCOUNT} render={() => <Account />} />
        <Route path={routes.PLANNER} render={() => <Planner />} />
        <Route path={routes.NOT_FOUND} render={() => <NotFound />} />
      </Suspense>
    </Switch>
  </div>
);

export default App;
