import React from "react";

export class LifeCycle extends React.Component {

    state = {favoriteColor : "red"};

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: "yellow"})
        }, 1000)
    }

    componentDidUpdate() {
        document.getElementById("divId").innerText = `The updated favorite color is ${this.state.favoriteColor}`;
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <div id="divId"></div>
            </div>
        )
    }
}