export default Object.freeze({
  MAIN: '/',
  AUTH: '/auth',
  MENU: {
    root: '/menu',
    item: '/menu/item/:id',
    add: '/menu/add',
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
  NOT_FOUND: '/not-found',
});
