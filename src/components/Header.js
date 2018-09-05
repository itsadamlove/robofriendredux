import React, { Component } from 'react';
import CounterButton from './CounterButton.js';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <h1 className="f2">RoboFriends</h1>;<CounterButton color={'red'} />
      </div>
    );
  }
}
export default Header;