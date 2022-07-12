import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggleReminder }) => {
  return (
    <div
      className={task.reminder ? "task reminder" : "task"}
      onDoubleClick={() => {
        onToggleReminder(task.id);
      }}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            onDelete(task.id);
          }}
        />
      </h3>

      <p>
        <strong>Module: </strong>
        {task.module}
        <br></br>
        <strong>Due: </strong>
        {task.day}
      </p>
    </div>
  );
};

export default Task;
