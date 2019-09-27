import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="text-center bg-success shadow-lg">
          <h1 className="align-self-center m-0 pt-1 shadow-text">ToDo app</h1>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
