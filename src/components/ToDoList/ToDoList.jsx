import "../../styles/ToDoList.scss";
import { Button } from "../UI/Button";

export function ToDoList({ tasks, toggleTask, deleteTask }) {


  return (
    <div className="container-list">
      {tasks.map((task, index) => (
        <div className={`task-box ${task.completed ? 'completed' : ''}`} key={index}>
          <div className="content-task">
            <div className="task-text">
              <p className={task.completed ? 'completed-text' : ''}>{task.text}</p>
            </div>
            <div className="controls">
              <div className="check-list">
                <div className="toggle-border">
                  <input
                    id={index}
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(index)}
                  />
                  <label htmlFor={index}>
                    <div className="handle"></div>
                  </label>
                </div>
              </div>
              <div className="delete-task">
                <Button
                  className="delete-button"
                  icon={
                    <svg className="delete-svgIcon" viewBox="0 0 448 512">
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                  }
                  onClick={() => deleteTask(index)}
                />
              </div>
            </div>
            <div className="date-task">
              <span>{task.created}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
