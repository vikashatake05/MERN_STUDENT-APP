import { useState } from "react";

export default function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const taskTitle = title.trim();
    const taskDescription = description.trim();

    if (!taskTitle && !taskDescription) return;

    const task = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      status: "pending",
    };

    if (props.onAddTask) {
      props.onAddTask(task);
    }

    setTitle("");
    setDescription("");
  }

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <label> Add Title </label>
        <input
          type="text"
          value={title}
          placeholder="Task title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label> Add Description </label>
        <input
          type="text"
          value={description}
          placeholder="Task description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}