
import React from 'react';
import ToDoScreen from './src/screens/ToDoScreen';
import {Provider} from 'react-redux';
import ToDoRedux from './src/screens/ToDoRedux';
import { store } from './src/redux/store';
const App = () => {
  return (    
    <Provider store={store}>
      <ToDoRedux/>  
    </Provider>
     
  );
};



export default App;
