import React, { Component } from "react";
import Function from "./components/Function";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Todo with LocalStorage & Delete Function</h2>
        <Function />
      </div>
    );
  }
}
export default App;
