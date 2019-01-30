export default Object.freeze({
  MAIN: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  MENU: {
    root: '/menu',
    item: '/menu/:id',
  },
  ORDER_HISTORY: '/order-history',
  CART: {
    root: '/cart',
    checkout: '/cart/checkout',
  },
  ACCOUNT: '/account',
  PLANNER: '/planner',
  ABOUT: '/about',
  CONTACT: '/contact',
  DELIVERY: '/delivery',
  FAVORITES: '/favorites',
  NOT_FOUND: '*',
});
