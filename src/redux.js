import {createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todos:[
    {
      id: uuidv4(), title: 'coding coding coding', complete: false},
    {id: uuidv4(), title: 'workout', complete: true},
    {id: uuidv4(), title: 'code challenges', complete: true},
    {id: uuidv4(), title: 'beer tasting', complete: true},
    {id: uuidv4(), title: 'Do laundry', complete: true},
    {id: uuidv4(), title: 'Do laundry', complete: true}
  ]
};

function reducer(state, {type, payload}){
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, payload]
      }

      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo => (todo.id === payload) ? {...todo, complete: !todo.complete}: todo)
        }

      case 'DELETE_TODO':
        console.log(payload);
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      }
    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const addTodoAction = (todo)=>({
  type: 'ADD_TODO',
  payload: todo
});
export const toggleTodoAction = (todoId)=>({
  type: 'TOGGLE_TODO',
  payload: todoId
});
export const deleteTodoAction = (todoId)=>({
  type: 'DELETE_TODO',
  payload: todoId
});