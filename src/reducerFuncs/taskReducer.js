export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.task.id);
    }
    case "changed": {
      return tasks.map((t) =>
        t.id === action.editedTask.id ? action.editedTask : t
      );
    }
    default: {
      throw Error("Unknown type" + action.type);
    }
  }
}
