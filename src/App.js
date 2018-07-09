import React, { Component } from 'react';
import './App.css';
import Input from "./Input";
import ListItem from "./ListItem";
import Filter from "./Filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filterType: ""      
    };
  }

  keyUpEventHandler = value => {
    var list = this.state.list;
    list.push(value);

    this.setState({
      list: list
    });
  }

  filterOnClickHandler = value => {
    this.setState({
      filterType: value
    });
  }

  render() {
    return (
      <div className={"App " + this.state.filterType}>
        <Input keyUpEventHandler={this.keyUpEventHandler} />
        {
          this.state.list.map((item, index) =>
            <ListItem key={index} text={item} id={index} />
          )
        }
        <Filter filterOnClickHandler={this.filterOnClickHandler} />
      </div>
    );
  }
}

export default App;
