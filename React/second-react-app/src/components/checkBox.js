import React from "react";

export class FormToCheckBox extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <CheckBox content = "I read the term of the app"/>
                    <CheckBox content = "I accept the term of the app"/>
                    <CheckBox checked = "checked" content = "I want to get the weekly news later"/>
                    <CheckBox checked = "checked" content = "I want to get sales and offers"/>
                </form>
            </div>
        )
    }
}

const CheckBox = (props) => {
    return (
        <label style={{display: "block"}}>
            <input type="checkbox" defaultChecked= {props.checked} onChange={()=>console.log("change")}/>
            {props.content}
        </label>
    )
}