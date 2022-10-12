
import React from 'react';
import ToDoScreen from './src/screens/ToDoScreen';
import {Provider} from 'react-redux';

import { store } from './src/redux/store';

const App = () => {
  return (
    
    <Provider store={store}>
     <ToDoScreen/>
     </Provider>
    
  );
};



export default App;
