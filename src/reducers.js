import { CHANGE_SEARCHFIELD } from './constants'

const initialState  = {
    searchfield: ''
}

export const searchRobots = (state=initialState, action={}) => {
    console.log(action)
    switch(action.type) {
        // after recieving a new action, return new state with everything in state plus new searchfield payload property
        case CHANGE_SEARCHFIELD:
        // return Object.assign({}, state, {searchfield: action.payload})
        // or 
        return {...state, searchfield: action.payload}
        default:
            return state
    }
}