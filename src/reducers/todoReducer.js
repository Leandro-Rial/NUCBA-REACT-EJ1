import { types } from "../types/Types"

const initialState = JSON.parse(localStorage.getItem("users")) || []

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.removeUser:
            
            return {
                ...state,
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })
            }
        
        case types.addUser:
            
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        
        default:
            return state
    }
}