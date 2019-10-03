import React, { Component } from "react";
import FancyH2 from "./FancyH2.jsx";
import RenderTasks from "./RenderTasks.jsx";

class DoneTasks extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      taskToFind: "",
      hideElement: false
    };
    this.state = this.initialState;
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  // ToDo hide elements that was not found
  searchTasks = () => {
    const { doneTasks } = this.props;
    const { taskToFind, hideElement } = this.state;
    if (!doneTasks) throw "No done tasks yet!";
    doneTasks.map(task => {
      if (task.text.includes(taskToFind)) {
        console.log(task.text);
      }
    });
  };

  render() {
    const { doneTasks, deleteDoneTask } = this.props;
    return (
      <React.Fragment>
        <section className="row bg-warning shadow-lg rounded p-4 my-5">
          <div className="col">
            <FancyH2 headerText="Done tasks" />
            <input
              type="text"
              placeholder="Type in to find task..."
              className=" form-control my-5"
              aria-describedby="basic-addon2"
              name="taskToFind"
              value={this.state.taskToFind}
              onChange={this.handleChange}
              onKeyUp={this.searchTasks}
            />
            <ul className="list-group list-group-flush done-list">
              <RenderTasks
                tasks={doneTasks}
                deleteTask={deleteDoneTask}
                renderDoneButton={false}
              />
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default DoneTasks;
