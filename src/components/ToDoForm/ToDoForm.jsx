import React, { useState } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import "../../styles/ToDoForm.scss";

export function ToDoForm({ addTask }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  }

  return (
    <div className="container-box">
      <form onSubmit={handleSubmit} className="form-field">
        <Input
          type="text"
          placeholder="Add new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button className="form-button" name="Add" type="submit" />
      </form>
    </div>
  );
}
