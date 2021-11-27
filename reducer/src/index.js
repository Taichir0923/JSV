import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import App from './App';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// store - бүх state-уудыг хадлгалах агуулах ( createStore )
// action - юу хийхийг тодорхойлж өгнө
// reducer - state-г өөрчлөх хэсэг

// dispatch - useDispatch

// selector - useSelector