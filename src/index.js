import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { ListReducer } from './reducers/list';
import App from './App';
import './index.css';

let reducers = combineReducers({
  list: ListReducer
})
let appStore = createStore(reducers);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
