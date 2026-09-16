import StatCard from "./Stackcard";
import TaskCard from "./Taskcard";
import AddTask from "./AddTask";

function Dashboard(props) {

    const totalTasks = props.tasks.length;
    const completedTasks = props.tasks.filter(
        (task) => task.status.toLowerCase() === "completed"
    ).length;
    const pendingTasks = props.tasks.filter(
        (task) => task.status.toLowerCase() === "pending"
    ).length;

    async function toggleTask(id){
        const task = props.tasks.find((task) => task.id === id);
        const newStatus = task.status === "Completed" ? "Pending" : "Completed";
        const response = await fetch(`http://localhost:5050/api/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
        });
        const updateTask = await response.json();
        props.setTasks(
            props.tasks.map((task) => {
                if(task.id === id){
                    return updateTask;
                }
                return task;
            })
        );
    }

    function addTask(newTask){
        const nextId = props.tasks.reduce(
            (highestId, task) => Math.max(highestId, Number(task.id) || 0),
            0
        ) + 1;
        props.setTasks([...props.tasks, {...newTask, id: nextId}]);
    }

    async function deleteTask(id) {
        const response = await fetch(`http://localhost:5050/api/tasks/${id}`, {
            method: "DELETE",
        });
        const deletedTask = await response.json();
        props.setTasks((tasks) =>
            tasks.filter((task) => task.id !== deletedTask.id)
        );
    }
       


    return (
        <main>
        
            <div className="stack-container">
                <StatCard title="Total Tasks" value={totalTasks}/>
                <StatCard title="Completed" value={completedTasks}/>
                <StatCard title="Pending" value={pendingTasks}/>
                
            </div>

            <AddTask  onAddTask={addTask}/>

            <h2>Recent Tasks</h2>

            <div className="task-container">
                {props.tasks.map((task)=>(
                    <TaskCard 
                        key={task.id} 
                        id ={task.id}
                        title={task.title} 
                        description={task.description} 
                        status={task.status}
                        onToggle={()=>toggleTask(task.id)} 
                        onDelete={()=>deleteTask(task.id)}
                    />
                ))}
            </div>

        </main>
    );
}

export default Dashboard;
