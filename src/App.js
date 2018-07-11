import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import TextInput from './TextInput';
import ListItem from './ListItem';
import DoneItem from './DoneItem';
import TodoFilter from './TodoFilter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      completedList: [],
      index: 0
    };
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <TextInput txtClasses="form-control" AddNewTodoItem={this.AddNewTodoItem} />
        </div>
        <div>
          <TodoFilter FilterArrayItems={this.FilterArrayItems} />
        </div>
        <div className="list-item-holder">
          {
            this.state.todoList.map((item) =>
              <ListItem SetCompletedList={this.SetCompletedList} key={item.id} id={item.id} text={item.text} htmlClass="custom-control custom-checkbox todo-item" />
            )
          }
        </div>

        <div className="list-item-holder done-holder">
          {
            this.state.completedList.map((item) =>
              <DoneItem RemoveDoneItem={this.RemoveCompletedListItem} key={item.id} id={item.id} text={item.text} htmlClass="custom-control custom-checkbox todo-item done" />
            )
          }
        </div>
      </div>
    );
  }

  AddNewTodoItem = (value) => {
    this.setState({ index: this.state.index + 1 });
    this.state.todoList.push({ id: this.state.index, text: value });
  }

  SetCompletedList = (item) => {
    var filteredArray = this.state.todoList.filter(arrayItem => arrayItem.id != item.target.id)
    this.setState({ todoList: filteredArray });
    this.state.completedList.push({ id: item.target.id, text: item.target.value });
  }

  RemoveCompletedListItem = (id) => {
    var filteredArray = this.state.completedList.filter(arrayItem => arrayItem.id !== id)
    this.setState({ completedList: filteredArray });
  };

  FilterArrayItems = (paramm) => {
    if (this.state.todoList) {
      var filteredArray = this.state.todoList.filter(arrayItem => arrayItem.text.includes(paramm))
      this.setState({ todoList: filteredArray });
    }

    if (this.state.completedList) {
      var filteredArray = this.state.completedList.filter(arrayItem => arrayItem.text.includes(paramm))
      this.setState({ completedList: filteredArray });
    }
  }

}

export default App;
