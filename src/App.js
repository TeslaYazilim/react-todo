import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./Input";

class App extends Component {
  keyUpEventHandler = value => {
    console.log(value);
}

  render() {
    return (
      <div className="App">
        <Input keyUpEventHandler={this.keyUpEventHandler}/>
      </div>
    );
  }
}

export default App;
