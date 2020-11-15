import React, { useState} from 'react';
import { useSelector, connect } from 'react-redux';
import { increment, decrement } from './redux/actions/index';
import MainList from './components/main-list/main-list.component';
import CustomButton from './components/button/custom-button-component';

import './App.scss';

function App(props) {
  const counter = useSelector(state => state.counter)
  //const dispatch = useDispatch();

  const handlePlus = () => {
    console.log("+", increment)
    props.increment(3)
  }

  return (
    <div className="App">
      <h5>counter is {counter}</h5>

      <button onClick={handlePlus}>+</button>
      <button onClick={props.decrement}>-</button>
      <MainList />
      <CustomButton />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  increment: num => dispatch(increment(num)),
  decrement: () => dispatch(decrement()),
});

export default connect(null, mapDispatchToProps)(App);
