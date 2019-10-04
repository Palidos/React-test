import React, { Component } from "react";
import FancyH2 from "./FancyH2.jsx";
import RenderTasks from "./RenderTasks.jsx";

class DoneTasks extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      taskToFind: ""
    };
    this.state = this.initialState;
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  searchTasks = () => {
    const { doneTasks } = this.props;
    const { taskToFind } = this.state;
    if (!doneTasks) throw "No done tasks yet!";
    let foundTasks =
      taskToFind === ""
        ? doneTasks
        : doneTasks.filter(task => task.text.includes(taskToFind));
    return foundTasks;
  };

  render() {
    const { deleteDoneTask } = this.props;
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
              onKeyDown={this.searchTasks}
            />
            <ul className="list-group list-group-flush done-list">
              <RenderTasks
                tasks={this.searchTasks()}
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
