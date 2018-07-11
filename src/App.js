import React, { Component } from 'react';
import './App.css';
import Input from "./Input";
import ListItem from "./ListItem";
import Filter from "./Filter";

Array.prototype.indexOfObject = function (property, value) {
  for (var i = 0, len = this.length; i < len; i++) {
    if (this[i][property] === value) return i;
  }
  return -1;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      listCache: [],
      filterType: "",
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    var that = this;
    this.setState({
      isLoading: true
    })
    setTimeout(function () {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
          that.setState({
            list: data,
            isLoading: false
          })
        })
        .catch(err => console.error(this.props.url, err.toString()))
    },  1000);
  }

  keyUpEventHandler = value => {
    var list = this.state.list;

    list.push({
      id: list.length + 1,
      title: value,
      completed: false
    });

    this.setState({
      list: list
    });
  }

  filterOnChangeRadioHandler = value => {
    this.setState({
      filterType: value
    });
  }

  filterOnChangeHandler = value => {
    var listCache = this.state.listCache;

    if (value.length > 0) {
      var list = this.state.list;

      if (listCache.length === 0) {
        this.setState({
          listCache: list
        });
      }

      var flist = list.filter(function (item) {
        return item.title.indexOf(value) !== -1;
      });

      this.setState({
        list: flist
      });

    } else {
      this.setState({
        list: listCache,
        listCache: []
      });
    }
  }

  listItemHandlerCheckBoxChange = (props, isChecked) => {
    var list = this.state.list;
    var index = list.indexOfObject("id", props.id);

    list[index].completed = isChecked;

    this.setState({
      list: list
    });
  }

  render() {
    return (
      <div className={"App " + this.state.filterType}>
        <Input keyUpEventHandler={this.keyUpEventHandler} />

        <div className="form-group">
          {this.state.isLoading &&
            <div className="loading"></div>
          }

          <div className="list-group">
            {
              this.state.list.map((item, index) =>
                <ListItem key={item.id} text={item.title} isdone={item.completed} id={item.id} listItemHandlerCheckBoxChange={this.listItemHandlerCheckBoxChange} />
              )
            }
          </div>
        </div>

        <Filter filterOnChangeRadioHandler={this.filterOnChangeRadioHandler} filterOnChangeHandler={this.filterOnChangeHandler} />
      </div>
    );
  }
}

export default App;
