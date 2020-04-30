import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../redux';



function TodoList() {
const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()

const toggleTodo = id =>{
  dispatch(toggleTodoAction(id));
}
  const deleteTodo = id =>{
    dispatch(deleteTodoAction(id));
}
  return (
    <div className='list'>
    {todos.map(todo => {
      return (

        <div key={todo.id} className='list-item'>
        <input type="checkbox" name="complete" id="complete"
          checked={todo.complete}
          onChange={(e)=>toggleTodo(todo.id)}
        />

        <span>{todo.title}</span>

          <div className='buttons'>
            <button
              onClick={(e) => deleteTodo(todo.id)}
              className='btn-icon'>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
      </div>
      )

    })}
      
    </div>
  )
}

export default TodoList;