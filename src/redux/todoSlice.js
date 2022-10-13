import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: initialState,
  },
  reducers: {
    todoCreate: (state, action) => {
      state.value.push(action.payload);
      console.log("kjfhjvkfhd",action.payload)
    },
    todoDelete: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload.id);
    },
    todoComplete: (state, action) => {
      state.value = state.value.map(todoItem => {
        if (todoItem.id === action.payload) {
          todoItem.state = !todoItem.state;
          
        }
        return todoItem;
      });
    },
    todoEdit: (state, action) => {
      state.value.map(todo => {
        if (todo.id === action.payload.id) {
          todo.task = action.payload.task;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {todoCreate, todoDelete, todoComplete, todoEdit} =
  todoSlice.actions;

export default todoSlice.reducer;