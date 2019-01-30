import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AppHeader from './AppHeader/AppHeader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Spiner from './Spiner/Spiner';

import { getCurrentUser } from './modules/session/sessionOperations';
import s from './App.module.css';
import routes from '../configs/routes';

const Cart = lazy(() =>
  import('../pages/Cart' /* webpackChunkName: "cart-page" */),
);
const SignUp = lazy(() =>
  import('../pages/SignUp' /* webpackChunkName: "sign-up-page" */),
);
const SignIn = lazy(() =>
  import('../pages/SignIn' /* webpackChunkName: "sign-in-page" */),
);
const Main = lazy(() =>
  import('../pages/Main' /* webpackChunkName: "main-page" */),
);
const Menu = lazy(() =>
  import('../pages/Menu' /* webpackChunkName: "menu-page" */),
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

class App extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    return (
      <div className={s.wrapper}>
        <AppHeader />

        <Suspense fallback={<Spiner />}>
          <Switch>
            <Route exact path={routes.CART.root} component={Cart} />
            <Route path={routes.SIGNIN} component={SignIn} />
            <Route path={routes.SIGNUP} component={SignUp} />
            <Route exact path={routes.MAIN} component={Main} />
            <Route
              exact
              path={routes.MENU.root}
              component={props => <Menu {...props} />}
            />
            <Route
              exact
              path={routes.MENU.item}
              component={props => <MenuItem {...props} />}
            />
            <Route exact path={routes.ABOUT} component={About} />
            <Route exact path={routes.CONTACT} component={Contact} />
            <Route exact path={routes.DELIVERY} component={Delivery} />

            <PrivateRoute path={routes.ACCOUNT} component={Account} />
            <PrivateRoute path={routes.PLANNER} component={Planner} />
            <PrivateRoute
              path={routes.ORDER_HISTORY}
              component={OrderHistory}
            />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mdtp = {
  getUser: getCurrentUser,
};

export default connect(
  null,
  mdtp,
)(App);
