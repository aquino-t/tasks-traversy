import { useState } from "react"
import Header from './components/Header';
import './App.css';
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Entrevista de Emprego",
      day: "Amanhã",
      reminder: true,
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) =>task.id !== id))
  }
  
  
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
      /> : "No tasks to show"}
    </div>
  );
}

export default App;
