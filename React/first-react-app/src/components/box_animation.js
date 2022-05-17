import React, {Fragment} from "react";
import "./style.css";

export class BoxAnimation extends React.Component {

    state = {diplayBox: false}

    componentDidMount() {
        setTimeout(()=> {
            this.setState({diplayBox: true});
        }, 1000)
    }

    componentDidUpdate() {
        if(this.state.diplayBox) {
            setTimeout(()=> {
                this.setState({diplayBox: false})
            }, 4000)
        }
    }

    render() {
        return (
            <div id="div">
                {this.state.diplayBox? <><div className="box"></div><div className="box2"></div><div className="box3"></div></>: ""}
            </div>
        )
    }
}