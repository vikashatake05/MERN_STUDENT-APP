import { Link } from "react-router-dom";
function Taskcard(props){
    return(
        <div className="task-card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.status}</p>
            <button onClick={props.onToggle}
            > change status</button>
            <button onClick={props.onDelete}>delete</button>
            <Link to={`/tasks/${props.id}`}>
                View Details
            </Link>
        </div>
    );
}
export default Taskcard;