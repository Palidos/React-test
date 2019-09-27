import React, { Component } from "react";
import NewTask from "./NewTask.jsx";
import ActiveTasks from "./ActiveTasks.jsx";
import DoneTasks from "./DoneTasks.jsx";

class Main extends Component {
  state = {
    tasks: [],
    doneTasks: []
  };

  addTask = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  markAsDone = id => {
    const { tasks, doneTasks } = this.state;
    console.log(id);
    //console.log(tasks.filter(task => task.id === id));
    this.setState({
      doneTasks: [
        ...doneTasks,
        tasks.filter(task => {
          return task.id === id;
        })
      ],
      tasks: tasks.filter(task => task.id !== id)
    });
  };

  deleteDoneTask = id => {
    const { doneTasks } = this.state;
    this.setState({
      doneTasks: [
        ...doneTasks,
        doneTasks.filter(task => {
          return task.id !== id;
        })
      ]
    });
  };

  render() {
    return (
      <main className="container">
        <NewTask task={this.state.tasks} handleSubmit={this.addTask} />
        <ActiveTasks
          tasks={this.state.tasks}
          markAsDone={this.markAsDone}
        />
        <DoneTasks
          doneTasks={this.state.doneTasks}
          deleteDoneTask={this.deleteDoneTask}
        />
      </main>
    );
  }
}

export default Main;
