import './App.css';
import React from 'react';
import {useState} from 'react';


import './App.css';
import TodoInput from './Component/Addtask';
import TodoList from './Component/ListTask';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    <div className="App5">
      <TodoInput/>
      <TodoList/>

   
    </div>
  );
}

export default App;
