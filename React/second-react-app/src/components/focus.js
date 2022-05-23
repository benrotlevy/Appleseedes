import React from "react";

export class Focus extends React.Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.inputRef.current);
        this.inputRef.current.focus();
    }

    render() {
        return <input ref={this.inputRef} type="text" />
    }
}