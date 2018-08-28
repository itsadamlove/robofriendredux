import React, { Component }from 'react'
import Cardlist from '../components/Cardlist'
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
  }

  onSearchChange = (e) => {
    this.setState({searchfield: e.target.value})
  }

  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
      <h1 className='tc'>Loading...</h1> :
      (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll >
            <ErrorBoundry>
              <Cardlist robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll >
        </div>
      )
  }
}

export default App
