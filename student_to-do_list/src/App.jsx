import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import {Routes, Route} from "react-router-dom"
import Tasks from "./components/Tasks";
import TaskDetail from "./components/TaskDetail";
import { useState ,useEffect } from "react";
function App(){

  const [tasks, setTasks] = useState([]);
useEffect(()=>{
  fetch("http://localhost:5050/api/tasks").then((response)=>response.json()).then((data)=>{
    setTasks(data);
  });
},[]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />
        <Route path="/tasks" element={<Tasks tasks={tasks} />} />
        <Route path="/tasks/:id" 
               element={<TaskDetail tasks={tasks} />} />
      </Routes>
    </div>
  );
}

export default App;
