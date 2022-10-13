// import logger from 'redux-logger';
// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from './reducers/rootReducer';
// export const store = createStore(rootReducer, applyMiddleware(logger));
import {configureStore} from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
import todoReducer from './todoSlice';

export const store = configureStore({
    reducer: {
    //   counter: counterReducer,
      todo: todoReducer,
    },
  });