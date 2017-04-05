import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { ListReducer } from './reducers/list';
import ReduxApp from './ReduxApp';
import AppContainer from './AppContainer';
import MobxApp from './MobxApp';
import ListStore from './mobx/listStore';
import './index.css';

let mobxStore = new ListStore();

let reducers = combineReducers({
  list: ListReducer
})
let appStore = createStore(reducers);

ReactDOM.render(
  <div>
    <AppContainer>
      <Provider store={appStore}>
        <ReduxApp />
      </Provider>
      <MobxApp store={mobxStore}/>
    </AppContainer>
  </div>,
  document.getElementById('root')
);
