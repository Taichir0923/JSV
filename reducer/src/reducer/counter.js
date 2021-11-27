import * as actionTypes from '../constants/counterConstants';
export const increateCounter = (state = 0 , action) => {
    switch(action.type){
        case actionTypes.INCREASE_BY_ONE:
            return state + 1;
        case actionTypes.DECREASE_BY_ONE:
            return state - 1;
        
        default: return state;
    }
}