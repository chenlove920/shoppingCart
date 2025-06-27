import React from 'react';
import { increment, decrement } from './store/modules/testRedux';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const testRedux = useAppSelector(state=> state.testRedux)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <button onClick={()=> dispatch(increment(1))}>+</button>
      <span>{testRedux.count}</span>
      <button onClick={()=> dispatch(decrement(1))}>-</button>
    </div>
  );
}

export default App;
