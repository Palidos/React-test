import React, { Component } from "react";

class FancyH2 extends Component {
  render() {
    const {headerText} = this.props;
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center shadow-text">
          <h2>{headerText}</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default FancyH2;
