import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions/index';
import MainList from './components/main-list/main-list.component';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (

    <div className="App">
      <h5>counter is {counter}</h5>

      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <MainList />
    </div>
  );
}

export default App;
