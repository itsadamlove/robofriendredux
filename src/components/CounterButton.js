import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
    //return false;
    //console.log(nextProps, nextState);
    //return true;
  }

  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

CounterButton.propTypes = {
  color: PropTypes.string,
  updateCount: PropTypes.func
};

export default CounterButton;
