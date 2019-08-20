import React, { Component } from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'

/*
App has 2 states: robots & searchfield
-State changes in app, react uses state to pass in props and to render components 
-Each time onChange is called, searchfield state is updated with e.target.value and we pass onSearchChange input text to SearchBox.  
-We have array of filtered robots state to only include those with searchfield text.  Filtered robots is passed as prop to Cardlist, only displays filtered robots
*/

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({ robots: users }))
    }

    // Each time searchbox event triggered, call searchChange function (which is a prop)
    onSearchChange = (event) => {
        // console.log(event.target.value)
        this.setState({ searchfield: event.target.value })
        
    }
    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filteredRobots)

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            )
        }
    }
}

export default App