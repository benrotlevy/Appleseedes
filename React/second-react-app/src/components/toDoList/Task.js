import React from "react";


export class Task extends React.Component {

    state = {inputVal: "", task: this.props.task, id: this.props.id};

    onInputChange =({target}) => {
        this.setState({inputVal: target.value});
    }

    update = () => {
        if(this.state.inputVal) {
            this.setState({task: this.state.inputVal});
            this.props.update(this.state.id, this.state.inputVal);
        }
    }

    delete = () => {
        this.props.delete(this.state.id);
    }

    render() {
        return (
            <div style={{display: "flex", gap: "1rem"}}>
                <div>
                    <h3>{this.state.task}</h3>   
                    <p>{this.props.time}</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div>
                        <input placeholder="update task" value={this.state.inputVal} onChange={this.onInputChange} />
                    </div>
                    <div>
                        <button onClick={this.update}>Update</button>
                        <button onClick={this.delete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}