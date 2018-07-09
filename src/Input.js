import React, { Component } from 'react';

class Input extends Component {
    keyUpEvent = (e) => {
        if (e.keyCode === 13) {
            this.props.keyUpEventHandler(e.target.value);
            e.target.value = "";
        }
    }

    render() {
        return (
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Add new todo item" onKeyUp={this.keyUpEvent} />
            </div>
        );
    }
}

export default Input;