import React from "react";
import "./style.css";

export class ChangingBox extends React.Component {

    state = {color: ["red", "yellow", "green", "blue", "black"], numChanges: 0, isCircle: false};

    componentDidMount() {
        console.log(1);
        this.setState({});
    }

    componentDidUpdate() {
        if(this.state.numChanges < 3) {
            // const num = this.state.numChanges + 1;
            setTimeout(()=> {
                // this.setState({numChanges: this.state.numChanges+1})
                this.setState((prev)=>{ 
                    prev.color.shift();
                    console.log(prev.color);
                    return {
                        numChanges: prev.numChanges+1,
                        color: prev.color,
                    }
                });

            }, 500)
        } else if(this.state.numChanges === 3) {               
            setTimeout(()=> {
                this.setState((prev)=>{ 
                    prev.color.shift();
                    console.log(prev.color);
                    return {
                        numChanges: prev.numChanges+1,
                        color: prev.color,
                        isCircle: true
                    }
                });
            }, 500)
        }
        // this.setState({color: "red"});
    }

    render() {
        return (
            <div className={this.state.isCircle? "circle": "box"} style={{backgroundColor: this.state.color[0]}}></div>
        )
    }
}