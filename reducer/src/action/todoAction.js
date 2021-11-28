import * as actionType from '../constants/todoConstants';
import axios from 'axios';

export const newTodo = todo => {
    return {
        type: actionType.NEW_TODO,
        payload: todo
    }
}

export const updateTodos = todo => {
    return {
        type: actionType.UPDATE_TODO,
        payload: todo
    }
}

export const deleteTodo = id => {
    return {
        type: actionType.DELETE_TODO,
        payload: id
    }
}

export const getUsers = () => async dispatch => {
    try {
        dispatch({
            type: "GET_USERS_REQ"
        })
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: "GET_USERS_RES",
            payload: data
        })
    } catch (error){
        dispatch( {
            type: "GET_USERS_ERROR",
            message: error.message
        } )
    }
}