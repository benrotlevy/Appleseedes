import React from "react";

export class AddTask extends React.Component {

    state = {inputVal: ""};

    onInputChange =({target}) => {
        this.setState({inputVal: target.value});
    }

    onAddClick =() => {
        const newTask = {task: this.state.inputVal, id: Math.random(), time: new Date().toLocaleTimeString()};
        this.props.addTask(newTask);
    }

    render() {
        return (
            <div>
                <input placeholder="add task" value={this.state.inputVal} onChange={this.onInputChange} />
                <button onClick={this.onAddClick}>Add Task</button>
            </div>
        )
    }
}