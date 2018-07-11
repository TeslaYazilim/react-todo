import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
     } 

    render() {
      return (
        <input  type="text" onKeyDown={this.TypingEnd} className={this.props.txtClasses}  />
      );
    }

    TypingEnd = (e) =>{
        if (e.keyCode === 13 && e.target.value!==''){
            this.props.AddNewTodoItem(e.target.value) 
            e.target.value='';   
        }         
    }
  }

  export default TextInput;