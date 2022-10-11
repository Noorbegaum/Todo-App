import {ADD_TODO, REMOVE_TODO,EDIT_TODO} from './Actiontypes';
export const add = payload => ({type: ADD_TODO, payload});
export const remove = payload => ({type: REMOVE_TODO, payload});
export const edit = payload => ({type: EDIT_TODO, payload});