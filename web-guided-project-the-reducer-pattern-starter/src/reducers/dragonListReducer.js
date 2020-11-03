import { ADD_NEW_MEMBER } from '../actions/dragonListActions'

const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
      ],
      header: 'Dragon Members'
}

// 'state = initialState' - this is the syntax for a 'default parameter'
export const dragonListReducer = (state = initialState, action) => {
    console.log('What REDUX is calling our reducer with: ', state, action)
    switch(action.type) {
        case TOGGLE_STATUS:
            return {
                ...state,
                members: state.members.map()
            }
        case ADD_NEW_MEMBER:
            return {
                ...state,
                members: [
                    ... state.members, 
                    { name: action.payload, dragonStatus: false}
                ]
            }
        default:
            return state;
    }
}

// What redux does behind the scenes to initialize the redux store. This happens when a reducer is passed into 'createStore'. This is why we need default params in redux
// dragonListReducer(undefined, { type: '@@redux/INIT.1.o.G.6.b' })