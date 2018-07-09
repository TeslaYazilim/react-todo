import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };
    }

    onChangeRadio = (e) => {
        this.props.filterOnChangeRadioHandler(e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    onChange = (e) => {
        this.props.filterOnChangeHandler(e.target.value);
    }

    render() {
        const btnStyle = "btn btn-secondary ";

        return (
            <div className="input-group">
                <input onChange={this.onChange} type="text" className="form-control" placeholder="Seacrh todo item" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className={btnStyle + " no-border-radius " + (this.state.value === "" || this.state.value === "all" ? "active" : "")}>
                            <input type="radio" name="options" value="all" onChange={this.onChangeRadio} /> All
                        </label>
                        <label className={btnStyle + (this.state.value === "done" ? "active" : "")}>
                            <input type="radio" name="options" value="done" onChange={this.onChangeRadio} /> Done
                        </label>
                        <label className={btnStyle + (this.state.value === "undone" ? "active" : "")}>
                            <input type="radio" name="options" value="undone" onChange={this.onChangeRadio} /> Undone
                        </label>
                    </div>
                </div>
            </div>

        );
    }
}

export default Filter;