import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
    checkItem = () => {
        this.props.checkedCallbackHandler(this.props.listItem.key);
    }
    render() {
        return (
            <div className={"row ListItem" + (this.props.listItem.checked === true ? " checked" : "") + (this.props.listItem.filterResult === true ? " visible" : " hidden")}>
                <div className="checkboxDiv">
                    <input type="checkbox" onClick={this.checkItem} checked={this.props.listItem.checked === true ? "checked" : ""} />
                </div>
                <div className="textDiv" onClick={this.checkItem}>{this.props.listItem.text}</div>
            </div>
        );
    }
}
  
export default ListItem;
  