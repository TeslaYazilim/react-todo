import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import ListItem from './components/ListItem';
import Filter from './components/Filter';

var lastKey = 0;

class App extends Component {
  constructor() {
    super();
    this.state={
      items: []
    };

    this.getDataFromApi();
  }

  getDataFromApi = () => {
    var newList = [];
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(results => {
      return results.json();
    })
    .then(data => {
      data.forEach(element => {
        newList.push({
          key: element.id,
          text: element.title,
          checked: element.completed,
          filterResult: true
        });

        if(element.id > lastKey){
          lastKey = element.id + 1;
        }
      });

      console.log(newList.length);
      
      if(newList.length > 0){
        this.setState({
          items: newList
        });
      }
    });
  }

  insertNewItem = (inputObj) => {
    if(inputObj.key === "Enter"){
      var enteredText = inputObj.target.value;
      var currentArray = this.state.items;
      currentArray.push({
        key: lastKey++,
        text: enteredText,
        checked: false,
        filterResult: true
      });
      this.setState({
        items: currentArray
      });
      inputObj.target.value = "";
    }
  }

  checkItem = (itemKey) => {
    var currentArray = this.state.items;
    currentArray.forEach(item => {
      if(item.key === itemKey){
        item.checked = !item.checked;
      }
    });
    this.setState({
      items: currentArray
    });
  }

  filterItemsByCompletionState = (filterStateId) => {
    var currentArray = this.state.items;
    currentArray.forEach(item => {
      if(filterStateId === -1){
        item.filterResult = true;
      }
      else if(filterStateId === 1){
        item.filterResult = item.checked;
      }
      else if(filterStateId === 0){
        item.filterResult = !item.checked;
      }
    });

    console.log(currentArray);

    this.setState({
      items: currentArray
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="text" className="form-control" onKeyPress={this.insertNewItem} />
          </div>
        </div>
        <Filter filterCallback={this.filterItemsByCompletionState} searchCallback={this.searchItems} />
        <div className="row">
          <div className="col-md-12">
          {
            this.state.items.map((item) => {
                return (
                    <ListItem listItem={item} checkedCallbackHandler={this.checkItem} key={item.key} />
                )
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
