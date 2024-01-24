import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const generateNextId = (tasks) => {
    const sortedTasks = tasks.sort((a, b) => b.id - a.id);
    return sortedTasks[0].id + 1;
  };
  // to add a task to existing list
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: generateNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };
  // to delete a task from existing list
  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };
  // to edit a task of tasks list
  const handleEditTask = (editedTask) => {
   setTasks(tasks.map(t => t.id === editedTask.id ? editedTask : t));
  };
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </>
  );
}
