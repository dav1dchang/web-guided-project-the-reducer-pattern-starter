// The action suite (not industry terminology)
// 1. action types
// 2. action creators
// 3. action objects

// action types:
export const ADD_NEW_MEMBER = 'ADD_NEW_MEMBER'

// action creator
export const addMember = (newMemberName) => {
    // returns an action object
    return { type: 'ADD_NEW_MEMBER', payload: newMemberName }
}