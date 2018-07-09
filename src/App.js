import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import ListItem from './components/ListItem';

var lastKey = 0;

class App extends Component {
  constructor() {
    super();
    this.state={
      items: []
    };
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
      else{
        if(filterStateId === 1){
          if(item.checked === true){
            item.filterResult = true;
          }
          else{
            item.filterResult = false;
          }
        }
        else if(filterStateId === 0){
          if(item.checked === true){
            item.filterResult = false;
          }
          else{
            item.filterResult = true;
          }
        }
      }
    });
    // this.setState({
    //   items: currentArray
    // });
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="text" className="form-control" onKeyPress={this.insertNewItem} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <button className="" onClick={this.filterItemsByCompletionState(-1)}>Tümü</button>
            <button className="" onClick={this.filterItemsByCompletionState(1)}>Bitenler</button>
            <button className="" onClick={this.filterItemsByCompletionState(0)}>Kalanlar</button>
          </div>
        </div>
        <div className="row">
        </div>
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
