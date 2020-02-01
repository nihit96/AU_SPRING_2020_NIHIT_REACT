import React, { Component } from 'react';
class ToDoForm extends Component {
    state = { 
        text : "",
        count:0

     }
     handleChange = ( event)=>
     {
        this.setState({
            [event.target.name]:event.target.value 
        })
     }
     handleSubmit = ( event)=>
     {
         event.preventDefault();  //prevents referesh..
        
            this.props.onSubmit({
                id:this.state.count,
                text:this.state.text,
                complete:false,
            })

            this.state.count +=1;
            this.state.text = "";
     }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
            <input name = "text" placeholder="... Add ToDo" value = {this.state.text} onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Add ToDo</button>
            </form> 
        );
    }
}
 
export default ToDoForm;