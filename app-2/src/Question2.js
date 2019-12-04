import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sisters: ["Traci", "Kelli", "Merilyn", "Leslie", "Cynthia"]
    };
  }
  
  render() {
    let sistersForLife = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return (
    <div className="App">{sistersForLife}</div>);
        
  }
}

export default App;
