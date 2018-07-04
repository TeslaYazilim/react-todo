import React, { Component } from 'react';

class Input extends Component {
    keyUpEvent = (e) => {
        if (e.keyCode === 13) {
            this.props.keyUpEventHandler(e.target.value);
        }
    }

    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.keyUpEvent} />
            </div>
        );
    }
}

export default Input;