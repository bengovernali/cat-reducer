import React, { Component } from "react";
import "./App.css";

import Name from "./components/name";
import Activity from "./components/activity";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Name />
        <Activity />
      </div>
    );
  }
}

export default App;
