import StatCard from "./Stackcard";
import TaskCard from "./Taskcard";
import AddTask from "./AddTask";
import { useState } from "react";



function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "learn React", description: "to be finished in 5 days", status: "pending" },
    { id: 2, title: "learn mern", description: "to be finished in 9 days", status: "pending" },
    { id: 3, title: "learn mongodb", description: "to be finished in 3 days", status: "pending" },
  ]);

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "pending" ? "completed" : "pending" }
          : task
      )
    );
  }

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }


  return (
    <main>
      <div className="stack-container">
        <StatCard title={"total tasks"} value={"10"} />
        <StatCard title={"completed"} value={"7"} />
        <StatCard title={"pending"} value={"3"} />
      </div>

      <AddTask onAddTask={addTask} />
      <section className="task-stats">
      <h2>Recent Tasks</h2>
      <div className="task-container">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id))}
          />
        ))}
      </div>
      </section>
    </main>
  );
}

export default Dashboard;