import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry.js';
import Header from '../components/Header.js';
import './App.css';

import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
    // Redux thunk is going to catch that that returns a function
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

App.propTypes = {
  searchField: PropTypes.string,
  onRequestRobots: PropTypes.func,
  onSearchChange: PropTypes.func,
  robots: PropTypes.array,
  isPending: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
