import React, { Component } from 'react'
import CardList from '../components/CardList'
import { robots } from '../robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

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

    // update state with componentDidMount when prop changes, repaints virtual DOM
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
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        console.log(filteredRobots)

        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App