import React, { Component } from "react";

const DoneButton = props => {
  const { markAsDone, renderDoneButton, task } = props;
  return renderDoneButton ? (
    <button
      className="btn btn-success task-btn mx-2"
      onClick={() => markAsDone(task)}
    >
      ✔
    </button>
  ) : (
    ""
  );
};

class RenderTasks extends Component {
  render() {
    const { tasks, markAsDone, deleteTask, renderDoneButton } = this.props;
    return (
      <React.Fragment>
        {tasks.map((task, index) => (
          <li className="list-group-item rounded shadow-lg" key={index}>
            <span className="task-text">{task.text}</span>
            <span>
              <button
                className="btn btn-danger task-btn mx-2"
                onClick={() => deleteTask(task)}
              >
                ✖
              </button>
              <DoneButton
                markAsDone={markAsDone}
                renderDoneButton={renderDoneButton}
                task={task}
              />
            </span>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

export default RenderTasks;
