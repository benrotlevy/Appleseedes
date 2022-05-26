import React from "react";
import { AddTask } from "./AddTask";
import { Task } from "./Task";

const data = [
    {task: "take out the dog", id: 1, time: new Date().toLocaleTimeString()},
    {task: "buy milk", id: 2, time: new Date().toLocaleTimeString()},
    {task: "get hair cut", id: 3, time: new Date().toLocaleTimeString()},
    {task: "visit grandma", id: 4, time: new Date().toLocaleTimeString()}
]

if(!localStorage.getItem("tasks")) {
    window.localStorage.setItem("tasks", JSON.stringify(data));
}

export class ToDoList extends React.Component {

    state = {tasks: []}

    componentDidMount() {
        this.setState({tasks: JSON.parse(localStorage.getItem("tasks"))});
    }

    addTask =(newTask) => {
        this.setState(prevState => ({tasks: [...prevState.tasks, newTask]}), ()=>{localStorage.setItem("tasks", JSON.stringify(this.state.tasks))});
    }

    insertTasks =() =>{
        return this.state.tasks.map(task => {
            return <Task time={task.time} key={task.id} id={task.id} task={task.task} delete={this.delete} update={this.update} />
        })
    }

    update =(id, value) => {
        const newTasks = this.state.tasks.map(task => {
            if(task.id === id) {
                return {...task, task: value};
            }
            return task;
        });
        this.setState({tasks: newTasks}, ()=>{localStorage.setItem("tasks", JSON.stringify(this.state.tasks))});
    }

    delete = (id) => {
        this.setState(prevState => ({tasks: prevState.tasks.filter(task => {
            return task.id !== id;
        })}), ()=>{localStorage.setItem("tasks", JSON.stringify(this.state.tasks))});
    }

    render() {
        return (
            <div>
                <AddTask addTask={this.addTask} />
                {this.state.tasks[0] && this.insertTasks()}
            </div>
        )
    }
}