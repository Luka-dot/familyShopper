import React, { useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { increment, decrement } from './redux/actions/index';

import MainList from './components/main-list/main-list.component';
import Header from './components/header/header-component';
import HomePage from './pages/home-page/home-page-component';
import LogInPage from './pages/logIn-page/logIn-page-component';

import './App.scss';

function App(props) {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/mainList' component={MainList} />
        <Route exact path='/logIn' component={LogInPage} />
      </Switch>
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