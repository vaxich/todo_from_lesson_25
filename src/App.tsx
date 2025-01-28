
import './App.css';
import { TodolistItem } from './TodolistItem';

export type TasksType = {
  id: string,
  title: string,
  isDone: boolean
}

export const App = () => {

  const tasks1 = [
    { id: '1', title: 'HTML&CSS', isDone: true },
    { id: '2', title: 'JS', isDone: true },
    { id: '3', title: 'React', isDone: false },
    { id: '4', title: 'Redux', isDone: false },
    { id: '4', title: 'TypeScript', isDone: false },
  ]

  return (
    <div className="App">
      <TodolistItem title='Что учить' tasks={tasks1} date = 'сегодня' />
      

    </div>
  );
}

export default App;
