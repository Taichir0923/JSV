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

export const getUsers = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        type: "GET_USERS",
        payload: data
    }
}