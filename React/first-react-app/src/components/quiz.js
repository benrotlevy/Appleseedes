import React from "react";

export class Q2Input extends React.Component {
    render() {
        return (
            <input></input>
        )
    }
}

export class Q2Title extends React.Component {
    render() {
        return (
            <h3>what is your favorite front end feature/topic</h3>
        )
    }
}

export class Q1Title extends React.Component {
    render() {
        return (
            <h3>how much you love front-end</h3>
        )
    }
}

export class Q1Input extends React.Component {
    render() {
        return (
            <input type= "range"></input>
        )
    }
}

export class Q1 extends React.Component {
    render() {
        return (
            <div>
                <Q1Title></Q1Title>
                <Q1Input></Q1Input>
            </div>
        )
    }
}

export class Q2 extends React.Component {
    render() {
        return (
            <div>
                <Q2Title></Q2Title>
                <Q2Input></Q2Input>
            </div>
        )
    }
}

export class QuizTitle extends React.Component {
    render() {
        return (
            <h1>how do you like front-end?</h1>
        )
    }
}

export class Quiz extends React.Component {
    render() {
        return (
            <div>
                <QuizTitle></QuizTitle>
                <Q1></Q1>
                <Q2></Q2>
            </div>
        )
    }
}

