import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let dispatch = this.props.dispatch;
    let renderItems = this.props.listItems.map(i => <div key={i}><span>I AM ITEM! My number is {i}</span></div>);
    let randomNum = Math.floor((Math.random() * 100000) + 1);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with a little of Redux</h2>
        </div>
        <div className="content">
          <button onClick={() => dispatch({type: 'ADD_LIST_ITEM', payload: randomNum})} >ADD NEW ITEM</button>
          <button onClick={() => dispatch({type: 'REMOVE_LIST_ITEM'})} >REMOVE LAST ITEM</button>
          <div>
            {renderItems}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    listItems: state.list.items
  }
}

export default connect(mapStateToProps)(App);