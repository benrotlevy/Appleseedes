import React from "react";

export class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num: 0}
        this.inc = this.inc.bind(this)
    }

    inc() {
        const num2 = this.state.num + 1;
        this.setState({num : num2})
    }

    render() {
        return (
            <div>
                <button onClick={this.inc}>increment</button>
                {this.state.num}
            </div>
        )
    }
}