import { useState } from "react"
import Header from './components/Header';
import './App.css';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Entrevista de Emprego",
      day: "Amanhã",
      reminder: true,
    }
  ])

  const addTaks = (task) => {
    const id = Math.floor(Math.random() *
    10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) =>task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

 
  
  
  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTaks}/>}
      {tasks.length > 0 ? <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder} 
      /> : "No tasks to show"}
    </div>
  );
}

export default App;
