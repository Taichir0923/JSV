import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { newTodo , updateTodos , deleteTodo , getUsers } from './action/todoAction';

import {ImSpinner6} from 'react-icons/im'

function App() {
  const [taskName , setTaskName] = React.useState('');
  const dispatch = useDispatch();
  const [updateTodo , setUpdateTodo] = React.useState(null);
  const [updateMode , setUpdateMode] = React.useState(false)

  const todos = useSelector(state => state.todoReducer);
  const userRducer = useSelector(state => state.userReducer);

  const {loading , users , error} = userRducer;

  const insertTask = () => {
    const todoObject = {
      taskName: taskName,
      completed: false,
      id: +Math.random().toString().split('.')[1]
    }

    dispatch(newTodo(todoObject));
    setTaskName('')
  }

  const selectTask = (todo) => {
    setUpdateTodo(todo);
    setTaskName(todo.taskName);
    setUpdateMode(true)
  }

  const updateTask = () => {
    const todoObject = {
      taskName: taskName,
      completed: updateTodo.completed,
      id: updateTodo.id
    }

    dispatch(updateTodos(todoObject));
    setUpdateMode(false);
  }

  const todoUstgah = id => {
    dispatch(deleteTodo(id))
  }

  const getData = () => {
    dispatch(getUsers());
  }

  return (
    <div className="w-full bg-gray-100 flex flex-col justify-center items-center h-screen">
      <div className='p-4 bg-white mb-4 flex flex-col rounded-xl'>
        <input value={taskName} onChange={e => setTaskName(e.target.value)} className='bg-gray-100 rounded-md py-3 px-4 mb-4' placeholder='task name' />
        <button onClick={updateMode ? updateTask : insertTask} className='bg-indigo-400 py-3 rounded-md px-4  text-white'>{
          updateMode ? "update" : 'insert'
        }</button>
      </div>
      <div className='p-4 w-96 bg-white mb-4 flex flex-col rounded-xl'>
        {
          todos.length !== 0 ? todos.map(todo => (
            <li className='w-full flex justify-between items-center' key={`todo_${todo.id}`}>{todo.taskName}
            <div className='flex gap-3'>
              <p onClick={() => selectTask(todo)}>zasah</p>
              <p onClick={() => todoUstgah(todo.id)}>ustgah</p>
            </div>
            </li>
          )) : <p onClick={getData}>Хэрэглэгчийн дата татах.</p>
        }
        {
          users && users.length !== 0 ? users.map((user , index) => (
            <p key={`user-${index}`}>{user.name}</p>
          )) : <p>hereglegch bhgui bna</p>
        }

        {
          loading && <div className='w-8 animate-spin h-8 flex justify-center items-center'>
            <ImSpinner6 />
          </div>
        }
      </div>
    </div>
  );
}

export default App;

// 