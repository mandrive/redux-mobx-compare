import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './ReduxApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReduxApp />, div);
});
