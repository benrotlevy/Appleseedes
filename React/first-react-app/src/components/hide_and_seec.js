import React from "react";

export class HideAndSeek extends React.Component {
    constructor(props) {
        super(props);

        this.state = {hide: false};
        this.flip = this.flip.bind(this);
    }

    flip() {
        const opposite = !this.state.hide;
        this.setState({hide: opposite})
    }

    render() {
        if(this.state.hide === true) {
            return (
                <div>
                    <button onClick={this.flip}>show/hide</button>
                </div>
            )
        }
        return (
            <div>
                <button onClick={this.flip}>show/hide</button>
                <div style={{height: "300px", width: "300px", backgroundColor: "yellow"}}></div>
            </div>
        )
    }
}