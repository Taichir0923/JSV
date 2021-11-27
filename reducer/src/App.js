import {useSelector , useDispatch} from 'react-redux';
import {increateCounter , decreaseCounter} from './action/counter';

function App() {
  const dispatch = useDispatch();
  const counterState = useSelector(state => state.increaseReducer)
  
  const increaseHandler = () => {
    dispatch(increateCounter());
  }

  const decreaseHandler = () => {
    dispatch(decreaseCounter())
  }
  
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <p className='text-xl'>{counterState}</p>
      <div className='flex gap-4'>
        <button onClick={decreaseHandler}>-</button>
        <button onClick={increaseHandler}>+</button>
      </div>
    </div>
  );
}

export default App;
