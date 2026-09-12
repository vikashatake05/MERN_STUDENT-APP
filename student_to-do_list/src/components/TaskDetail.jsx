import { useParams } from "react-router-dom";

function TaskDetails(props){
    const { id } = useParams();
    const task = props.find((task) => task.id === Number(id));
    if(!task) {
        return <h1>Task not found</h1>;
    }
    return (
        <div>
            <h1>Task Details</h1>
            <h2>{task.title}</h2>
            <h2>{task.description}</h2>
            <h2>Status:{task.status}</h2>
        </div>
    );
}
export default TaskDetails;
