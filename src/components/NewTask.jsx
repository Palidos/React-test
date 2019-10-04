import React, { Component } from "react";
import FancyH2 from "./FancyH2.jsx";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      task: ""
    };
    this.inputRef = React.createRef();

    this.newId = 0;
    this.state = this.initialState;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleKeyPress = e => {
    if (e.keyCode == 13) {
      // enter key
      this.submitForm(e);
    }
  };

  submitForm = e => {
    e.preventDefault();
    if (!this.state.task) throw "Task can't be empty!";

    this.props.handleSubmit({
      id: this.newId++,
      text: this.state.task,
      visible: true
    });
    this.setState(this.initialState);
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { task } = this.state;
    return (
      <React.Fragment>
        <section className="new-task row bg-warning shadow-lg rounded p-4 my-5">
          <div className="col">
            <FancyH2 headerText="New Task" />
            <div className="input-group my-5">
              <input
                type="text"
                placeholder="Add new task..."
                className=" form-control"
                aria-describedby="basic-addon2"
                name="task"
                value={task}
                ref={this.inputRef}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyPress}
              />
              <div className="input-group-append">
                <button
                  type="submitForm"
                  className="btn btn-success submit-btn"
                  onClick={this.submitForm}
                >
                  CREATE
                </button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default NewTask;
