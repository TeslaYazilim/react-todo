import React, { Component } from 'react';

class Filter extends Component {
    filterList = (stateType) => (e) => {
        this.props.filterCallback(stateType);
    }
    searchList = (e) => {
        //TODO: Search yapilacak
        console.log(e.target.value);
        // if(inputObj.key === "Enter"){
        //     var enteredText = inputObj.target.value;
        //     var currentArray = this.state.items;
        //     currentArray.push({
        //         key: lastKey++,
        //         text: enteredText,
        //         checked: false,
        //         filterResult: true
        //     });
        //     this.setState({
        //         items: currentArray
        //     });
        //     inputObj.target.value = "";
        // }
        // this.props.searchCallback(keyword);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12 form-group">
                    <input type="text" onChange={this.searchList} />
                    <button className="" onClick={this.filterList(-1)}>Tümü</button>
                    <button className="" onClick={this.filterList(1)}>Bitenler</button>
                    <button className="" onClick={this.filterList(0)}>Kalanlar</button>
                </div>
            </div>
        );
    }
}
  
export default Filter;