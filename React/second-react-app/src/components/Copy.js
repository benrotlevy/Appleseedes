import React from "react";

export class Copy extends React.Component {

    constructor(props) {
        super(props);

        this.textareaRef = React.createRef();
    }

    onButtonClick = (event) => {
        console.log(this.textareaRef.current.value);
        this.textareaRef.current.select();
        // document.execCommand("copy");
        navigator.clipboard.writeText(this.textareaRef.current.value);
    }

    render() {
        return (
            <div>
                <textarea ref={this.textareaRef}/>
                <div>
                    <button onClick={this.onButtonClick}>Copy</button>
                </div>
            </div>
        )
    }
}