import React, { Component } from "react";
import FancyH2 from "./FancyH2.jsx";
import RenderTasks from "./RenderTasks.jsx"

class ActiveTasks extends Component {
  render() {
    const { tasks, markAsDone, deleteTask } = this.props;
    return (
      <React.Fragment>
        <section className="row bg-warning shadow-lg rounded p-4 my-5">
          <div className="col">
            <FancyH2 headerText="Active tasks" />
            <ul className="list-group list-group-flush">
              <RenderTasks
                tasks={tasks}
                markAsDone={markAsDone}
                deleteTask={deleteTask}
                renderDoneButton={true}
              />
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ActiveTasks;
