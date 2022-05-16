import React from "react";

export class IncrementDecrement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num: 0, currColor: "black"}
    }

    inc =() =>{
        const num2 = this.state.num + 1;
        if(num2 < 11) {
            this.change(num2);
        }
    }

    change =(num) => {
        if(num > 0) {
            this.setState({num : num, currColor : "green"})
        } else if(num < 0) {
            this.setState({num : num, currColor : "red"})
        } else {
            this.setState({num : num, currColor : "black"})
        }
    }

    dec =() =>{
        const num2 = this.state.num - 1;
        if(num2 > -11) {
            this.change(num2);
        }
    }

    render() {
        return (
            <div>
                <h3 style={{color: this.state.currColor}}>{this.state.num}</h3>
                <button onClick={this.inc}>increment</button>
                <button onClick={this.dec}>decrement</button>
            </div>
        )
    }
}