import React, { createContext, useEffect, useReducer } from 'react';
import { types } from '../types/Types';
import { UserReducer } from './UserReducer';

const initialState = {
    users: []
}

const init = () => {
    return (
        JSON.parse(localStorage.getItem("users")) || initialState
    )
}

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(state))
    }, [state])

    const removeUser = (id) => {
        dispatch({
            type: types.removeUser,
            payload: id
        })
    }
    
    const addUser = (user) => {
        dispatch({
            type: types.addUser,
            payload: user,
        })
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            removeUser,
            addUser
        }}>
            {children}
        </UserContext.Provider>
    )
    
}