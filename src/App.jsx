import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(0);
  let [cond, setCond] = useState(true)

  const addTask = () => {
    if(cond)
    {
      if (newTask) {
        setTasks([...tasks, newTask]);
        setNewTask('');
      }
    }
    else
    {
        tasks[editIndex] = document.querySelector('.task-input').value;
        document.querySelector('.add').innerHTML = "Add Task";
        setCond(cond=true);
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    // const editedTask = prompt('Edit your task:', tasks[index]);
    document.querySelector('.task-input').value = tasks[index];
    document.querySelector('.add').innerHTML = 'Update';
    setEditIndex(index);
    setCond(cond=false);
    // if (editedTask) {
    //   const newTasks = [...tasks];
    //   newTasks[index] = editedTask;
    //   setTasks(newTasks);
    // }
  };

  return (
    <div className='main-div'>
      <h2>Todo List</h2>
      <div>
        <input 
          type='text'
          className='task-input'
          placeholder='Enter a task' 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button className='add' onClick={addTask}>Add Task</button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <span>{task}</span>
            <button className='edit' onClick={() => editTask(index)}>Edit</button>
            <button className='remove' onClick={() => removeTask(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;