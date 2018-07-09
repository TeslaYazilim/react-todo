import React, { Component } from 'react';
import './App.css';
import Input from "./Input";
import ListItem from "./ListItem";
import Filter from "./Filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["3 adet ekmek", "Peynir", "Organik yumurta"],
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
        return item.indexOf(value) !== -1;
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

  render() {
    return (
      <div className={"App " + this.state.filterType}>
        <Input keyUpEventHandler={this.keyUpEventHandler} />

        <div className="form-group">
          <div class="list-group">
            {
              this.state.list.map((item, index) =>
                <ListItem key={index} text={item} id={index} />
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
