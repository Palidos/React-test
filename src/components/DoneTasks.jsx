import React, { Component } from "react";
import FancyH2 from "./FancyH2.jsx";
import RenderTasks from "./RenderTasks.jsx";

class DoneTasks extends Component {
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  searchTasks = () => {
    const { taskToFind } = this.state;
    doneTasks.map(task => {
      if (task.text.includes(taskToFind)) {
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
