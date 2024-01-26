export default function taskReducer(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    case "deleted": {
      return draft.filter((t) => t.id !== action.task.id);
    }
    case "changed": {
      const index = draft.findIndex((t) => t.id === action.editedTask.id);
      draft[index] = action.editedTask;
      break;
    }
    default: {
      throw Error("Unknown type" + action.type);
    }
  }
}
