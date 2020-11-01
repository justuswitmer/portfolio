import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { put, takeLatest } from "redux-saga/effects";
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';





const projects = [
  {
    href: "g",
    name: "Lake Elmo Aero",
    path: '',
  },
  {
    href: "https://github.com/justuswitmer/prime-solo-project",
    name: "financeIt",
    path: '',
  },
  {
    href: "https://github.com/justuswitmer/weekend-movie-sagas",
    name: "Movie Library",
    path: '',
  },
  {
    href: "https://github.com/justuswitmer/witmer-redux-feedback-loop",
    name: "Feedback Survey",
    path: '',
  },
  {
    href: "https://github.com/justuswitmer/weekend-sql-to-do-list",
    name: "To Do List",
    path: '/Users/jman/Prime/secondTier/portfolio/src/images/todoList.png',
  },
  {
    href: "https://github.com/justuswitmer/redux-pizza-parlor",
    name: "Pizza Parlor",
    path: '',
  },
]

function* fetchImage(action) {
  console.log('hit fetchImage', action);
  yield put({
    type: 'SET_IMAGE'
  });
}


const imageReducer = (state = projects, action) => {
  console.log('in imageReducer', action, state);
  switch (action.type) {
    case 'SET_IMAGE':
      return state;
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeLatest('FETCH_IMAGE', fetchImage);
}

// const rootReducer = combineReducers({
//   imageReducer,
// });


const store = createStore(
  combineReducers({
    imageReducer,
  }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
