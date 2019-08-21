import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import { setSearchField } from '../actions'

const mapStateToProps = state => {
    return {
        searchfield: state.searchfield
    }
}

const mapDispatchToProps = (dispatch) => {
   return { 
       onSearchChange: (event) => dispatch(setSearchField(event.target.value)) 
    }
}

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
        }
    }

    // update state with componentDidMount when prop changes, repaints virtual DOM
    componentDidMount() {
        // console.log(this.props.store.getState())
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
        const { robots } = this.state
        const { searchfield, onSearchChange } = this.props
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        console.log(filteredRobots)

       return !robots.length ?
             <h1>Loading</h1> :
           (
                <div className='tc'>
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                    
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        
    }
}
// connect is higher order function (returns another function -> App)
// subscribes to any changes in redux store, gives props to App
export default connect(mapStateToProps, mapDispatchToProps)(App)