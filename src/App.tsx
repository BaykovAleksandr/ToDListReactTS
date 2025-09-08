import './App.css'
import { TodolistItem } from './TodolistItem'



export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

function App() {
  // Data
  const todolistTitle: string = "What to learn"
  const tasks: TaskType[] = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS/TS", isDone: true },
    { id: 3, title: "REACT", isDone: false },
    { id: 3, title: "REACT", isDone: false },

  ]

  const todolistTitle_1: string = "What to buy"
  const tasks_1: TaskType[] = [
    { id: 4, title: "Milk", isDone: true },
    { id: 5, title: "Meat", isDone: true },
    { id: 6, title: "Bread", isDone: false },
    { id: 7, title: "Water", isDone: false },
    { id: 8, title: "Chips", isDone: false },
  ]

  //UI
  return (
    <div className="app">
      <TodolistItem title={todolistTitle} tasks={tasks} />
      <TodolistItem title={todolistTitle_1} tasks={tasks_1} />
    </div>
  )
}

export default App
