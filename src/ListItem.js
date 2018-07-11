import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idWithPrefix: "todo_" + props.id
    };
  }

  render() {
    return (     
      <div id={this.state.idWithPrefix} className={this.props.htmlClass}>
        <input value={this.props.text} onChange={this.CheckedChange} type="checkbox" className="custom-control-input" id={this.props.id} />
        <label className="custom-control-label" htmlFor={this.props.id}>{this.props.text}</label>
      </div>

    );
  }

  CheckedChange = (item) => {
    if (item.target.checked) {
      this.props.SetCompletedList(item);
    }
  }
}

export default ListItem;