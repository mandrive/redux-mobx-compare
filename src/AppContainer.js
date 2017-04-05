import React, { Component } from 'react';
import logo from './logo.svg';
import './AppContainer.css';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with a little of Redux and MobX</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;