import * as actionType from '../constants/todoConstants';

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