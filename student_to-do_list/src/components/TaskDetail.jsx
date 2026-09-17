import { Link, useParams } from "react-router-dom";
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
        return <div className="task-detail-state">Loading task details...</div>;
    }

    if (error || !task) {
        return (
            <div className="task-detail-state">
                <h1>Task not found</h1>
                <Link className="task-detail-back" to="/tasks">Back to all tasks</Link>
            </div>
        );
    }

    return (
        <main className="task-detail-page">
            <Link className="task-detail-back" to="/tasks">&lt;- Back to all tasks</Link>

            <article className="task-detail-card">
                <div className="task-detail-header">
                    <div>
                        <p className="task-detail-eyebrow">Task details</p>
                        <h1>{task.title}</h1>
                    </div>
                    <span className={`task-status ${task.status.toLowerCase()}`}>
                        {task.status}
                    </span>
                </div>

                <div className="task-detail-divider" />

                <section className="task-detail-description">
                    <p className="task-detail-label">Description</p>
                    <p>{task.description || "No description added for this task."}</p>
                </section>
            </article>
        </main>
    );
}
export default TaskDetails;
