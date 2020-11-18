import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import MainList from './components/main-list/main-list.component';
import Header from './components/header/header-component';
import HomePage from './pages/home-page/home-page-component';
import LogInPage from './pages/logIn-page/logIn-page-component';
import { auth } from './firebase/firebase.utils';

import './App.scss';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);

      console.log(user);
    })
  });

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/mainList' component={MainList} />
        <Route exact path='/logIn' component={LogInPage} />
      </Switch>
    </div>
  );
}


export default App;
