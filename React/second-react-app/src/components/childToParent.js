import React from "react";

const colors = ['blue','red','yellow'];

const CustomButton = (prop) => {
    return <button style={{backgroundColor: prop.color}} onClick = {(e)=> prop.onClick(prop.color)}>{prop.color}</button>
}

class Parent extends React.Component {

    state = {currColor: null}

    onButtonClick = (color) => {
        this.setState({currColor: color})
    }

    loop() {
        let buttons = []
        // for(let color of colors) {
        //     buttons.push(<CustomButton color = {color} onClick = {this.onButtonClick} />);
        // }
        colors.forEach((color, index) => {buttons.push(<CustomButton key = {index} color = {color} onClick = {this.onButtonClick} />);})
        return buttons;
    }

    render() {
        return (
            <>
                {this.loop()}
                <h1>The color selected is: {this.state.currColor}</h1>
            </>
        )
    }
}

export default Parent;

