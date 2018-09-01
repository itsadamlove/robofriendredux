import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';

import { searchRobots, requestRobots } from './reducers.js';

const logger = createLogger();
// Allows middleware to work with redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
