import { uuid } from 'uuidv4';
import {ADD_TODO, REMOVE_TODO,EDIT_TODO,ADD_TEXT} from './Actiontypes';
// export const addText = value => ({
//     typoe: ADD_TEXT,
//     payload:value
// })
export const add = payload => ({type: ADD_TODO, payload});
export const remove = payload => ({type: REMOVE_TODO, payload});
export const edit = (id) => {
    return {
      type: EDIT_TODO,
      payload: {
        id: id,
      },

    };
  };