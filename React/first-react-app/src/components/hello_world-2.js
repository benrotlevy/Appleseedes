import React from "react";

export class HelloWorld2 extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>{data[0]} {data[1]}</h1>
                <h1>{number1} + {number2} = {number1+number2}</h1>
                <h1>The string’s length is {string.length}</h1>
            </div>
        )
    }
}

const data = ["hello", "world"];
const number1 = 5;
const number2 =6;
const string = "I love React!";