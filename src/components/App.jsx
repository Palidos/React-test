import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles/App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
