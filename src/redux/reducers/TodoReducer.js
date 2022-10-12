import {ADD_TODO, REMOVE_TODO,EDIT_TODO} from '../actions/Actiontypes'
const INITIAL_STATE = {todos: [], isEdit: false,editTodoId: "",};


const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {todos: [...state.todos, action.payload]};
    case REMOVE_TODO:
      return {todos: handleRemoveTodo(action.payload, state.todos)};
      case EDIT_TODO:
        return {todos: handleEditTodo(action.payload, state.todos)};
        // const editTodo = action.payload;
        // let newEditTodo = state.todos.find((item) => item === editTodo);
        // return {
        //   ...state,
        //   isEdit: action.isEdit,
        //   editTodo: newEditTodo,
        // };fbvdf
    default:
      return state;
  }
};

const handleEditTodo = (item, todos) => {
  console.log("hiiiiii",item)
};

const handleRemoveTodo = (item, todos) => {
  console.log(item)
  const todoIndex = todos.indexOf(item);
  todos.splice(todoIndex, 1);
  return todos;
};
export default todoReducer;
