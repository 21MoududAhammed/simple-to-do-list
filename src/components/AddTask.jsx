import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setValue("");
          onAddTask(value);
        }}
      >
        Add Task
      </button>
    </>
  );
}
