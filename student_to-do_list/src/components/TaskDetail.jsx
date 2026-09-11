import {useParams} from 'react-router-dom';
function TaskDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Task Detail Page</h1>
      <p>Task ID: {id}</p>
    </div>
  );
}
export default TaskDetail;