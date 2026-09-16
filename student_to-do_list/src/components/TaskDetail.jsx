import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TaskDetails(){
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        fetch(`http://localhost:5050/api/tasks/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setTask(data);
            }).catch((requestError) => {
                console.error("Error fetching task:", requestError);
                setError(true);
            }).finally(() => {
                setLoading(false);
            })
    },[id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error || !task) {

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
