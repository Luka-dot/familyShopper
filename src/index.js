import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import promise from "redux-promise";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import allReducers from './redux/reducers/index';

const createStoreWithMiddleware = applyMiddleware(promise)(thunk)(createStore);

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
