import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootModule from '../components/modules/rootModule';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootModule, enhancer);

export default store;
