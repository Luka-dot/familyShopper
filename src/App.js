import React, { useState } from 'react';

import './App.scss';

import Header from './components/header-component';
import CustomButton from'./components/button/custom-button-component';
import List from './components/list-component/list-component';
import ListContainer from './components/list-component/list-container';



function App() {
  const [list, setList] = useState([{
    id: 1,
    title: "new task",
    text: "clean up garage",
    completed: false
  },
  {
    id: 2,
    title: "ANOTHER task",
    text: "more and more text everywhere.",
    completed: true
  },
  {
    id: 3,
    title: "TASK 333",
    text: "more and more text everywhere.",
    completed: true
  }
  ]);

const handleToggle = (id) => {
  const newList = [...list];
  const index = newList.find(item => {
    return item.id === id
  })
  index.completed = !index.completed;
  setList(newList);
}

const handleDelete = (id) => {
  console.log('delete')
}

  return (
    <div className="App">
      <Header />
      <ListContainer listData={list} handleToggle={handleToggle} handleDelete={handleDelete}/>
      <CustomButton />
    </div>
  );
}

export default App;
