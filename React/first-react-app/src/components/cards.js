import React from "react"
export class Card extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img}></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.p}</p>
                <a href={this.props.link1} style={{margin: "1rem"}}>{this.props.link1Content}</a>
                <a href={this.props.link2} style={{margin: "1rem"}}>{this.props.link2Content}</a>
            </div>
        )
    }
}