import * as actionType from '../constants/todoConstants';
export const newTodo = todo => {
    return {
        type: actionType.NEW_TODO,
        payload: todo
    }
}