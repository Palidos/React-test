import React, { Component } from "react";

const RenderTasks = props => {
  return (
    <React.Fragment>
      {props.doneTasks.map((doneTask, index) => (
        <li className="list-group-item rounded shadow-lg" key={index}>
          <span className="task-text">{doneTask.text}</span>
          <span>
            <button
              className="btn btn-danger task-btn mx-2"
              onClick={props.deleteDoneTask(doneTask.id)}
            >
              ✖
            </button>
          </span>
        </li>
      ))}
    </React.Fragment>
  );
};

class DoneTasks extends Component {
  render() {
    const { doneTasks, deleteDoneTask } = this.props;
    return (
      <React.Fragment>
        <section className="row bg-warning shadow-lg rounded p-4 my-5">
          <div className="col">
            <div className="d-flex justify-content-center shadow-text">
              <h2>Done tasks</h2>
            </div>

            <input
              type="text"
              placeholder="Type in to find task..."
              className=" form-control my-5"
              aria-describedby="basic-addon2"
            />
            <ul className="list-group list-group-flush done-list">
              <RenderTasks doneTasks={doneTasks} deleteDoneTask={deleteDoneTask} />
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default DoneTasks;
