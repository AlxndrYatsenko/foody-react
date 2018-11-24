import React from 'react';
import Comment from './Comment';
import dishList from '../services/menu.json';

const App = () => <Comment dish={dishList[3]} />;
export default App;
