import React, { Component } from "react";
import NewTask from "./NewTask.jsx";
import ActiveTasks from "./ActiveTasks.jsx";
import DoneTasks from "./DoneTasks.jsx";

class Main extends Component {
  state = {
    tasks: localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
    doneTasks: localStorage.getItem("doneTasks")
      ? JSON.parse(localStorage.getItem("doneTasks"))
      : []
  };

  syncStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    localStorage.setItem("doneTasks", JSON.stringify(this.state.doneTasks));
  }

  addTask = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  componentDidUpdate(prevState) {
    if (prevState.tasks !== this.state.tasks) {
      this.syncStorage();
    }
  }

  markAsDone = doneTask => {
    const { tasks, doneTasks } = this.state;
    //console.log(tasks.filter(task => task.id === id));
    this.setState({
      doneTasks: [...doneTasks, doneTask],
      tasks: tasks.filter(task => task.id !== doneTask.id)
    });
  };

  deleteTask = taskToDelete => {
    const { tasks, doneTasks } = this.state;
    this.setState({
      tasks: tasks.filter(task => task.id !== taskToDelete.id),
      doneTasks: doneTasks.filter(task => task.id !== taskToDelete.id)
    });
  };

  render() {
    return (
      <main className="container">
        <NewTask task={this.state.tasks} handleSubmit={this.addTask} />
        <ActiveTasks
          tasks={this.state.tasks}
          markAsDone={this.markAsDone}
          deleteTask={this.deleteTask}
        />
        <DoneTasks
          doneTasks={this.state.doneTasks}
          deleteDoneTask={this.deleteTask}
        />
      </main>
    );
  }
}

export default Main;
