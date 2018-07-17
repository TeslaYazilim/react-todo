import React, { Component } from 'react';

class TodoFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="col-sm-12">
        <div className="col-sm-6 p-r-0">
          <input placeholder="Search..." type="text" onChange={this.FilterTodoItems} className="form-control" />
        </div>
        <div className="col-sm-6 p-l-0">
          <div className="btn-group btn-group-justified" role="group" aria-label="...">
            <div className="btn-group" role="group">
              <button onClick={this.FilterTodoItemsForType(0)} type="button" className="btn btn-warning">Undone</button>
            </div>
            <div className="btn-group" role="group">
              <button onClick={this.FilterTodoItemsForType(1)} type="button" className="btn btn-success">Done</button>
            </div>
            <div className="btn-group" role="group">
              <button onClick={this.FilterTodoItemsForType(2)} type="button" className="btn btn-info">All</button>
            </div>
          </div>
        </div>
      </div>

    );
  }

  FilterTodoItems = (e) =>{
    this.props.FilterArrayItems(e.target.value);
  }

  FilterTodoItemsForType =(filterType)=> (e) =>{
    this.props.FilterTodoItemsForType(filterType);
  }



}

export default TodoFilter;