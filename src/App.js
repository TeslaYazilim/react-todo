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
      list: [{
        id: 1,
        text: "3 adet ekmek",
        isdone: false
      },
      {
        id: 2,
        text: "Organik yumurta",
        isdone: false
      },
      {
        id: 3,
        text: "Patates",
        isdone: true
      }],
      listCache: [],
      filterType: ""
    };
  }

  keyUpEventHandler = value => {
    var list = this.state.list;
    list.push(value);

    list.sort();

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
        return item.text.indexOf(value) !== -1;
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

    list[index].isdone = isChecked;

    this.setState({
      list: list
    });
  }

  render() {
    return (
      <div className={"App " + this.state.filterType}>
        <Input keyUpEventHandler={this.keyUpEventHandler} />

        <div className="form-group">
          <div className="list-group">
            {
              this.state.list.map((item, index) =>
                <ListItem key={item.id} text={item.text} isdone={item.isdone} id={item.id} listItemHandlerCheckBoxChange={this.listItemHandlerCheckBoxChange} />
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
