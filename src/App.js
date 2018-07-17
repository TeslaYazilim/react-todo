import React, { Component } from 'react';
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
      index: 1,
      isLoading: true,
      showDone: true,
      showUndone: true,
      cacheTodoList: [],
      cacheCompletedList: [],
    };
  }

  render() {
    return (
      <div className="App container layout">
        <div className="row">
          <TextInput txtClasses="form-control" AddNewTodoItem={this.AddNewTodoItem} />
        </div>
        <div>
          <TodoFilter FilterTodoItemsForType={this.FilterTodoItemsForType} FilterArrayItems={this.FilterArrayItems} />
        </div>
        {this.state.isLoading ? <div className="loader"></div> : null}
        <div className="list-item-holder">
          {
            this.state.showUndone ?
              this.state.todoList.map((item) =>
                <ListItem SetCompletedList={this.SetCompletedList} key={item.id} id={item.id} text={item.text} htmlClass="custom-control custom-checkbox todo-item" />
              )
              :
              null
          }
        </div>
        <div className="list-item-holder done-holder">
          {
            this.state.showDone ?
              this.state.completedList.map((item) =>
                <DoneItem RemoveDoneItem={this.RemoveCompletedListItem} key={item.id} id={item.id} text={item.text} htmlClass="custom-control custom-checkbox todo-item done" />
              )
              :
              null
          }
        </div>
      </div>
    );
  }

  AddNewTodoItem = (value) => {
    this.setState({ index: this.state.index + 1 });
    this.state.todoList.push({ id: this.state.index, text: value });

    this.setState({ cacheTodoList: this.state.todoList });

  }

  SetCompletedList = (item) => {
    var filteredArray = this.state.todoList.filter(arrayItem => arrayItem.id != item.target.id)
    this.setState({ todoList: filteredArray });
    this.state.completedList.push({ id: item.target.id, text: item.target.value });

    this.setState({ cacheCompletedList: this.state.completedList });
  }

  RemoveCompletedListItem = (id) => {
    var filteredArray = this.state.completedList.filter(arrayItem => arrayItem.id !== id)
    this.setState({ completedList: filteredArray });
  };

  FilterArrayItems = (item) => {
    if (item === null || item === '') {
      this.setState({ todoList: this.state.cacheTodoList });
    } else {
      var filteredArray = this.state.todoList.filter(arrayItem => arrayItem.text.includes(item))
      this.setState({ todoList: filteredArray });
    }
    if (item === null || item === '') {
      this.setState({ completedList: this.state.cacheCompletedList });
    } else {
      var filteredArray = this.state.completedList.filter(arrayItem => arrayItem.text.includes(item))
      this.setState({ completedList: filteredArray });
    }
  }

  LoadJsonData = (e) => {
    var that = this;
    var cacheTodoList = [];
    var cacheDoneList = [];

    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => {
        return response.json();
      })
      .then(array => {
        array.forEach(function (item) {
          if (item.completed) {
            cacheTodoList.push({ id: item.id, text: item.title });
            that.setState({ index: that.state.index + 1, todoList: cacheTodoList });
          } else {
            cacheDoneList.push({ id: item.id, text: item.title })
            that.setState({ index: that.state.index + 1, completedList: cacheDoneList });
          }
        });

      })
      .catch((error) => {
        console.error(error);
      });

    this.setState({ todoList: cacheTodoList, cacheTodoList: cacheTodoList });
    this.setState({ completedList: cacheDoneList, cacheCompletedList: cacheDoneList });

  }

  componentDidMount() {
    setTimeout(() => { this.setState({ isLoading: false }); }, 1500);
    this.LoadJsonData();
  }

  FilterTodoItemsForType = (filterType) => {
    switch (filterType) {
      case 0:
        this.setState({ showDone: false, showUndone: true });
        break;
      case 1:
        this.setState({ showDone: true, showUndone: false });
        break;
      default:
        this.setState({ showDone: true, showUndone: true });
        break;
    }
  }

}

export default App;
