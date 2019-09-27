import React, { Component } from "react";

const RenderTasks = (props) => {
  return (
    <React.Fragment>
      {props.tasks.map((task, index) => (
        <li className="list-group-item rounded shadow-lg" key={index}>
          <span className="task-text">{task.text}</span>
          <span>
            <button className="btn btn-danger task-btn mx-2">✖</button>
            <button
              className="btn btn-success task-btn mx-2"
              onClick={props.markAsDone(task.id)}
            >
              ✔
            </button>
          </span>
        </li>
      ))}
    </React.Fragment>
  );
};

class ActiveTasks extends Component {
  render() {
    const { tasks, markAsDone } = this.props;
    return (
      <React.Fragment>
        <section className="row bg-warning shadow-lg rounded p-4 my-5">
          <div className="col">
            <div className="d-flex justify-content-center shadow-text">
              <h2>Active tasks</h2>
            </div>
            <ul className="list-group list-group-flush">
              <RenderTasks tasks={tasks} markAsDone={markAsDone} />
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ActiveTasks;
