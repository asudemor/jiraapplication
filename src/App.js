import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import React, { useState } from 'react';

function App() {

  const [tasks,setTasks] = useState([]);

  const createTask = (title, taskDesc) =>{
    const createdTasks=[
      ...tasks,{
        id:Math.round(Math.random()*999999),
        title,
        taskDesc
      }
    ];
    setTasks(createdTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}></TaskCreate>
      <h1>Görevler</h1>
      <TaskList tasks={tasks}></TaskList>
    </div>
  );
}

export default App;
