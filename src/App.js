import React, { useState, useEffect } from 'react';

import './App.scss';

import Header from './components/header-component';
import CustomButton from'./components/button/custom-button-component';
import List from './components/list-component/list-component';
import ListContainer from './components/list-component/list-container';



function App() {
  const initialList = [{
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
  },
  {
    id: 4,
    title: "new task",
    text: "clean up garage",
    completed: false
  },
  {
    id: 5,
    title: "ANOTHER task",
    text: "more and more text everywhere.",
    completed: true
  },
  {
    id: 8,
    title: "ANOTHER task",
    text: "LAST one.",
    completed: true
  }];

const [list, setList] = useState(initialList);

const handleToggle = (id) => {
  const newList = [...list];
  const index = newList.find(item => {
    return item.id === id
  })
  index.completed = !index.completed;
  setList(newList);
}

const handleDelete = (id) => {
//  const newList = list.filter(item => item.id !== id)
  list.splice(id, 1)
  setList([...list]);
  console.log(list)
}

useEffect(() => {
  setList(list)
}, [list])

const handleAddButton = (entry) => {
  const newId = Math.random();
  const newList = [...list];
  newList.push({ id: newId, title: "", text: entry, completed: false});
  setList(newList);
}

  return (
    <div className="App">
      <div>
      <Header />
      <ListContainer listData={list} handleToggle={handleToggle} handleDelete={handleDelete}/>
      </div>
      <CustomButton handleAddButton={handleAddButton}/>
    </div>
  );
}

export default App;
