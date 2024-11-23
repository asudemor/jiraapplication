import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [
      ...tasks,
      response.data,
      // {
      //   id: Math.round(Math.random() * 999999),
      //   title,
      //   taskDesc,
      // },
    ];
    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    console.log(response);
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete("http://localhost:3001/tasks/" + id);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedDescription) => {
    await axios.put("http://localhost:3001/tasks/" + id, {
      title: updatedTitle,
      taskDesc: updatedDescription,
    });

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedDescription };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}></TaskCreate>
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      ></TaskList>
    </div>
  );
}

export default App;
