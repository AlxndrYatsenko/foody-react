import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

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
  <div>
    <AppHeader />

    <Switch>
      <Suspense fallback={<Spiner />}>
        <Route exact path={routes.AUTH} component={Auth} />
        <Route exact path={routes.MAIN} component={Main} />
        <Route exact path={routes.MENU.root} component={Menu} />
        <Route exact path={routes.MENU.add} component={AddMenuItem} />
        <Route path={routes.MENU.item} component={MenuItem} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.CONTACT} component={Contact} />
        <Route path={routes.DELIVERY} component={Delivery} />
        <Route path={routes.NOT_FOUND} component={NotFound} />
        <Route path={routes.ORDER_HISTORY} component={OrderHistory} />
        <Route path={routes.ACCOUNT} component={Account} />
        <Route path={routes.PLANNER} component={Planner} />
      </Suspense>
    </Switch>
  </div>
);

export default App;
