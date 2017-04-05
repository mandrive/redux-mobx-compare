import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxApp extends Component {
  render() {
    let renderItems = this.props.listItems.map(i => <div key={i}><span>I AM ITEM! My number is {i}</span></div>);
    let randomNum = Math.floor((Math.random() * 100000) + 1);

    return (
        <div className="content">
          <h1>Redux</h1>
          <button onClick={() => this.props.dispatch({type: 'ADD_LIST_ITEM', payload: randomNum})} >ADD NEW ITEM</button>
          <button onClick={() => this.props.dispatch({type: 'REMOVE_LIST_ITEM'})} >REMOVE LAST ITEM</button>
          <div>
            {renderItems}
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

export default connect(mapStateToProps)(ReduxApp);