import * as actionTypes from '../constants/counterConstants'
export const increateCounter = () => {
    return {
        type: actionTypes.INCREASE_BY_ONE
    }
}

export const decreaseCounter = () => {
    return {
        type: actionTypes.DECREASE_BY_ONE
    }
}