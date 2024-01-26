import { useImmerReducer } from "use-immer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";
import taskReducer from "./reducerFuncs/taskReducer";


export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  const generateNextId = (tasks) => {
    let nextId;
    if (tasks.length > 0) {
      const maxId = tasks.reduce((max, current) =>
        max.id > current.id ? max.id : current.id
      );
      nextId = maxId + 1;
    } else {
      nextId = 1;
    }
    return nextId;
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
