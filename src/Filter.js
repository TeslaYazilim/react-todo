import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    onClick = (e) =>{
        this.props.filterOnClickHandler(e.target.value);
    }

    render() {
        return (
            <div>
                <input onClick={this.onClick} type="button" value="All" />
                <input onClick={this.onClick} type="button" value="Done" />
                <input onClick={this.onClick} type="button" value="Undone" />
            </div>
        );
    }
}

export default Filter;