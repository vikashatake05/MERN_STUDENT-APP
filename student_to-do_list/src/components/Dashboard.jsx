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

    function toggleTask(id){
        props.setTasks(
            props.tasks.map((task) => {
                if(task.id === id){
                    return {...task, 
                        status: task.status === "Completed" 
                                    ? "Pending" 
                                    : "Completed"
                    };
                }
                return task;
            })
        );
    }

    function addTask(newTask){
        props.setTasks([...props.tasks, newTask]);
    }

    function deleteTask(id){
        props.setTasks(
            props.tasks.filter((task)=>task.id !==id)
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
