import { types } from "../types/Types"

export const UserReducer = (state = {}, action) => {
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