import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false
        }
    }

    handleCheckBoxChange = (e) => {
        var isChecked = !this.state.isChecked;

        this.setState({
           isChecked: isChecked
        })
    }

    render() {
        const htmlIdPredfix = "todo-item";

        return (
            <div className={htmlIdPredfix + " " + this.state.isChecked}>
                <input id={htmlIdPredfix + "-" + this.props.id} type="checkbox" defaultChecked={this.state.isChecked} onChange={this.handleCheckBoxChange} />
                <label htmlFor={htmlIdPredfix + "-" + this.props.id} >{this.props.text}</label>
            </div>
        );
    }
}

export default ListItem;