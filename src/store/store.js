import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// import rootModule from '../components/modules/rootModule';
import menuReducer from '../components/modules/Menu/duck/menuReducer';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(menuReducer, enhancer);

export default store;
