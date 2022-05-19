import React from "react";

const Input = (props) => {
    return (
        <div>
            <label>
                {props.content}
                <input type={props.type} onChange={(e)=> props.onChange(e, e.target.value, props.id)} value= {props.value} />
            </label>
        </div>
    )
}

const TextArea = (props) => {
    return (
        <div>
            <textarea onChange={(e)=> props.onChange(e, e.target.value, props.id)} value= {props.value} />
        </div>
    )
}

const Button = (props) => {
    return (
        <>
            <input type={props.type} onClick={(e)=> props.onChange(e, props.trigger, props.id)} value= {props.value} />
        </>
    )
}

const Select = (props) => {
    return (
        <div>
            <label>
                {props.content}
                <select value={props.value} onChange={(e)=> props.onChange(e, e.target.value, props.id)}>
                        <option value= "minor">0-17</option>
                        <option value= "adult">18-66</option>
                        <option value= "senior">67-120</option>
                    </select>
            </label>
        </div>
    )
}

export class FormReview extends React.Component {

    state = {
        isFinish: false,
        firstName: "",
        lastName: "",
        age: "adult",
        text: "put text here"
    }

    onInputChange = (event, value, id) => {
        this.setState(()=>{return{[id] : value}}, ()=>{localStorage.setItem(id , value); console.log(localStorage);})
    }

    review() {
        return (
            <>
                <form>
                    <p>first Name:{this.state.firstName}</p><p>last Name:{this.state.lastName}</p><p>{this.state.age}</p><p>{this.state.text}</p>
                    <Button id= "isFinish" trigger= {false} type= "button" value= "back" onChange={this.onInputChange}/>
                    <Button id= "isFinish" trigger= {true} type= "submit" value= "Send Survey" onChange={this.onInputChange}/>
                </form>
            </>
        )
    }

    form() {
        return (
            <>
                <form>
                    <Input id= "firstName" type= "text" content= "First Name" onChange={this.onInputChange} value= {this.state.firstName}/>
                    <Input id= "lastName" type= "text" content= "Last Name" onChange={this.onInputChange} value= {this.state.lastName}/>
                    <Select id= "age" content= "Age:" onChange={this.onInputChange} value= {this.state.age}/>
                    <TextArea id= "text" onChange={this.onInputChange} value= {this.state.text} />
                    <Button trigger= {true} id= "isFinish" type= "button" value= "Continue" onChange={this.onInputChange}/>
                </form>
            </>
        )
    }

    render() {
        return (
            <div>
                {!(this.state.isFinish) ? this.form() : this.review()}
            </div>
        )
    }
}