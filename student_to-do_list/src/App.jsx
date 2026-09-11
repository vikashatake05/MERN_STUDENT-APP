import "./App.css";
import Tasks from "./components/Tasks";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import TaskDetail from "./components/TaskDetail";

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />

      </Routes>
    </div>
  );
}

export default App;