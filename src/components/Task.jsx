import { useState } from "react";

export default function Task({ onDeleteTask, task, onEditTask }) {
  const [text, setText] = useState(task.text);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onEditTask({ ...task, done: !task.done })}
      />
      {isEdit ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      ) : (
        task.text
      )}
      <button
        onClick={() => {
          setIsEdit(!isEdit);
          onEditTask({ ...task, text: text });
        }}
      >
        {isEdit ? "Save" : "Edit"}
      </button>
      <button onClick={() => onDeleteTask(task)}>Delete</button>
    </li>
  );
}
