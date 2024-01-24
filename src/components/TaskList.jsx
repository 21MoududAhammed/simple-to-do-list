import Task from "./Task";

export default function TaskList({ onDeleteTask, tasks, onEditTask }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
}
