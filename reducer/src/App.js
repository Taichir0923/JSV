import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { newTodo , updateTodos , deleteTodo } from './action/todoAction';

function App() {
  const [taskName , setTaskName] = React.useState('');
  const dispatch = useDispatch();
  const [updateTodo , setUpdateTodo] = React.useState(null);
  const todos = useSelector(state => state.todoReducer);
  const [updateMode , setUpdateMode] = React.useState(false)
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
          )) : <p>Ажил оруулаагүй байна.</p>
        }
      </div>
    </div>
  );
}

export default App;
