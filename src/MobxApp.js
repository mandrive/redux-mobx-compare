import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class MobxApp extends Component {
  render() {
    let renderItems = this.props.store.items.map(i => <div key={i}><span>I AM ITEM! My number is {i}</span></div>);
    let randomNum = Math.floor((Math.random() * 100000) + 1);

    return (
        <div className="content">
          <h1>MobX</h1>
          <button onClick={() => { this.props.store.items.push(randomNum)}} >ADD NEW ITEM</button>
          <button onClick={() => { this.props.store.items = this.props.store.items.slice(0, this.props.store.items.length - 1)}} >REMOVE LAST ITEM</button>
          <div>
            {renderItems}
          </div>
          <DevTools />
        </div>
    );
  }
}

export default observer(MobxApp);