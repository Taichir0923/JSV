import * as actionTypes from '../constants/todoConstants';
export const newTodo = (state = [], action) => {
    switch(action.type){
        case actionTypes.NEW_TODO:
            return [...state , action.payload]

        case actionTypes.UPDATE_TODO:
            const updateList = [...state];
            const updateTodoIndex = updateList.findIndex(todo => todo.id === action.payload.id);
            updateList[updateTodoIndex] = action.payload;

            return updateList;
        
        case actionTypes.DELETE_TODO:
            const listAfterDelete = state.filter(todo => todo.id !== action.payload);
            return listAfterDelete;

        default: return state
    }
}

export const getUsers = (state = [], action) => {
    switch(action.type){
        case "GET_USERS": 
            return action.payload;
        default: return state
    }
}