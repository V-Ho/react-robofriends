import { CHANGE_SEARCHFIELD } from './constants'

const initialState  = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        // after recieving a new action, return new state with everything in state plus new searchfield payload property
        case CHANGE_SEARCHFIELD:
        return Object.assign({}, state, {searchField: action.payload})
        // or return {...state, searchField: action.payload}
        default:
            return state
    }
}