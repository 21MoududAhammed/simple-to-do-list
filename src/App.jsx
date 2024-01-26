import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";
import taskReducer from "./reducerFuncs/taskReducer";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const generateNextId = (tasks) => {
    const sortedTasks = tasks.sort((a, b) => b.id - a.id);
    return sortedTasks[0].id + 1;
  };
  // to add a task to existing list
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: generateNextId(tasks),
      text: text,
    });
  };
  // to delete a task from existing list
  const handleDeleteTask = (task) => {
    dispatch({
      type: "deleted",
      task: task,
    });
  };
  // to edit a task of tasks list
  const handleEditTask = (editedTask) => {
    dispatch({
      type: "changed",
      editedTask: editedTask,
    });
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
