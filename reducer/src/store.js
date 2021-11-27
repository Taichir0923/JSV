import { combineReducers , createStore } from 'redux';

import { increateCounter } from './reducer/counter';
import { newTodo } from './reducer/todo';

const reducers = combineReducers({
    increaseReducer: increateCounter,
    todoReducer: newTodo
});

const store = createStore(reducers)

export default store;
// ToDo List