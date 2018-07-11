import React, { Component } from 'react';

class DoneItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idWithPrefix: "todo_done_" + props.id
    };
  }

  render() {
    return (
      <div id={this.state.idWithPrefix} className={this.props.htmlClass}>
        <input disabled={true} value={this.props.text} checked={true} type="checkbox" className="custom-control-input" id={this.props.id} />
        <label className="custom-control-label" htmlFor={this.props.id}>{this.props.text}</label>
        <button onClick={this.RemoveDoneItem(this.props.id)} className="btn btn-danger"><i className="glyphicon glyphicon-trash"></i></button>
      </div>
    );
  }

  RemoveDoneItem = id => e => {
    this.props.RemoveDoneItem(id);
  };

}

export default DoneItem;