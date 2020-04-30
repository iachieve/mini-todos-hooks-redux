import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {Provider} from 'react-redux';
import {store} from './redux';

function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
      <TodoInput/>
      <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
