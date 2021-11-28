import { combineReducers , createStore } from 'redux';

import { newTodo } from './reducer/todo';

const reducers = combineReducers({
    todoReducer: newTodo
});

const store = createStore(reducers)

export default store;
// ToDo List