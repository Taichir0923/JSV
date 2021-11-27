import * as actionTypes from '../constants/todoConstants';
export const newTodo = (state = [], action) => {
    switch(action.type){
        case actionTypes.NEW_TODO:
            return [...state , action.payload]
        default: return state
    }
}