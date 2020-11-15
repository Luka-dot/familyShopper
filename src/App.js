import React, { useState} from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions/index';
import MainList from './components/main-list/main-list.component';
import CustomButton from './components/button/custom-button-component';

import './App.scss';

function App(props) {

  return (
    <div className="App">
      <h5>counter is {props.counter}</h5>

      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <MainList />
      <CustomButton />
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: num => dispatch(increment(3)),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
