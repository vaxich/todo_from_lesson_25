
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





  const [tasks, setTasks] = useState<TasksType[]>([
    { id: crypto.randomUUID(), title: 'HTML&CSS', isDone: true },
    { id: crypto.randomUUID(), title: 'JS', isDone: true },
    { id: crypto.randomUUID(), title: 'React', isDone: false },
    { id: crypto.randomUUID(), title: 'Redux', isDone: false },
    { id: crypto.randomUUID(), title: 'TypeScript', isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterValueType>("All");



  const creatTask = (newTaskTitle: string) => {
    const newTask = { id: crypto.randomUUID(), title: newTaskTitle, isDone: false }
    let nextState = [newTask, ...tasks]
    setTasks(nextState)
    //alert("таск добавлен")
  }
  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id != taskId))
    // tasks = tasks.filter( task => task.id != taskId)
    // alert(taskId)
  }

  const changeFilter = (newFilterValue: FilterValueType) => {
    setFilter(newFilterValue)
  }

  const changeTaskStatus = (taskId: string, isDone: boolean) => {

    const newState = tasks.map( task => task.id === taskId ? {...task, isDone: isDone } : task)
    setTasks(newState)
    // const task = tasks.find(task => task.id === taskId)
    // if (task) {
    //   task.isDone = isDone
    //   setTasks([...tasks])
    // }
  }

  let filteredTasks = tasks;
  if (filter === "Active") {
    filteredTasks = tasks.filter(task => !task.isDone)
  }
  if (filter === "Completed") {
    filteredTasks = tasks.filter(task => task.isDone)
  }

  return (
    <div className="App">
      <TodolistItem
        title='Что учить'
        filter = {filter}
        tasks={filteredTasks}
        creatTask={creatTask}
        deleteTask={deleteTask}
        changeFilter={changeFilter}
        changeTaskStatus={changeTaskStatus}
      />


    </div>
  );
}

export default App;
