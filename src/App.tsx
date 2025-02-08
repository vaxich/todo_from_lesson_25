
import { useState } from 'react';
import './App.css';
import { TodolistItem } from './TodolistItem';

export type TasksType = {
  id: string,
  title: string,
  isDone: boolean
}

export type FilterValueType = "All" | "Active" | "Completed"

export const App = () => {

  const [tasks, setTasks] = useState<TasksType[]> ([
    { id: '1', title: 'HTML&CSS', isDone: true },
    { id: '2', title: 'JS', isDone: true },
    { id: '3', title: 'React', isDone: false },
    { id: '4', title: 'Redux', isDone: false },
    { id: '5', title: 'TypeScript', isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterValueType>("All");

  // let tasks = [
  //   { id: '1', title: 'HTML&CSS', isDone: true },
  //   { id: '2', title: 'JS', isDone: true },
  //   { id: '3', title: 'React', isDone: false },
  //   { id: '4', title: 'Redux', isDone: false },
  //   { id: '5', title: 'TypeScript', isDone: false },
  // ]

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter( task => task.id != taskId))
    // tasks = tasks.filter( task => task.id != taskId)
    // alert(taskId)
  }

  const changeFilter = (newFilterValue: FilterValueType) => {
    setFilter(newFilterValue)
  }

  let filteredTasks = tasks;
  if (filter === "Active") {
    filteredTasks = tasks.filter( task => !task.isDone)
  }
  if (filter === "Completed") {
    filteredTasks = tasks.filter( task => task.isDone)
  }

  return (
    <div className="App">
      <TodolistItem 
      title='Что учить' 
      tasks={filteredTasks} 
      deleteTask = {deleteTask} 
      changeFilter = {changeFilter}
      />
      

    </div>
  );
}

export default App;
