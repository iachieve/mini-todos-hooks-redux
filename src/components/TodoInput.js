import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {addTodoAction} from '../redux';
import { v4 as uuidv4 } from 'uuid';


function TodoInput() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch()

  const onChange = e => {
    setTodo(e.target.value);
  }
  const onSubmit = e =>{
    e.preventDefault();
    if(todo.trim() === '') return;
    dispatch(addTodoAction({ id: uuidv4(), todo}));
    setTodo('')
  }
  return (
    <form onSubmit={onSubmit} className='form'>
      <input type='text'
      className='input'
        name='todo'
        placeholder='add a todo'
        value={todo}
        onChange={onChange}
      />
      <button className='btn-submit' type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoInput
