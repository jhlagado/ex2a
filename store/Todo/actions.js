import cuid from 'cuid';
import { createAction } from 'redux-actions';

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const addTodo = createAction(ADD_TODO, (text, id) => {
  return {
    id: id === undefined ? cuid() : id,
    text
  }
});
export const toggleTodo = createAction(TOGGLE_TODO, id => { 
  return { id }; 
});
