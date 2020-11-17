import React, { useState} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions/index';
import MainList from './components/main-list/main-list.component';
import CustomButton from './components/button/custom-button-component';
import Header from './components/header/header-component';
import HomePage from './pages/home-page/home-page-component'

import './App.scss';

function App(props) {

  return (
    <div className="App">
      <Header />
      <Route exact path='/home' component={HomePage} />
      <MainList />
      <div className="positionInBottom" >
        <CustomButton  />
      </div>
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


// function App(props) {

//   return (
//     <div className="App">
//       <h5>counter is {props.counter}</h5>
//       <button onClick={props.increment}>+</button>
//       <button onClick={props.decrement}>-</button>
//       <MainList />
//       <div className="positionInBottom" >
//         <CustomButton  />
//       </div>
//     </div>
//   );
// }