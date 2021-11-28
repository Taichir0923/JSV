import { combineReducers , createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { newTodo , getUsers } from './reducer/todo';

const reducers = combineReducers({
    todoReducer: newTodo,
    userReducer: getUsers
});

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
// ToDo List