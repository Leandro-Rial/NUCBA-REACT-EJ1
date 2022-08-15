import { types } from "../types/Types";

export const removeUser = (id) => {
    return (dispatch) => {
        dispatch({
            type: types.removeUser,
            payload: id
        })
    }
}

export const addUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: types.addUser,
            payload: user,
        })
    }
}