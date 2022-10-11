
import React from 'react';
// import Home from './src/screens/Home';
import ToDoScreen from './src/screens/ToDoScreen';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/redux/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => {
  return (
    
    <Provider store={store}>
     <ToDoScreen/>
     </Provider>
    
  );
};



export default App;
