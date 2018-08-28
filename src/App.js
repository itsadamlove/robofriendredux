import React, { Component }from 'react'
import Cardlist from './Cardlist'
import {robots} from './robots.js'
import SearchBox from './SearchBox.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({searchfield: e.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return(
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Cardlist robots={filteredRobots}/>
      </div>
    )
  }
}

export default App
