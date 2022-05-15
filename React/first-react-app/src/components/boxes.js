import React from "react";

export class Box4 extends React.Component {
    render() {
        return (
            <div style={{margin: "auto",marginTop: "2rem", backgroundColor: "purple", width: "70%", height: "40%"}}></div>
        )
    }
}

export class Box3 extends React.Component {
    render() {
        return (
            <div style={{margin: "auto", padding: "1rem", backgroundColor: "pink", width: "80%", height: "90%"}}>
                <Box4></Box4>
                <Box4></Box4>
            </div>
        )
    }
}

export class Box2 extends React.Component {
    render() {
        return (
            <div style={{margin: "auto", padding: "1rem", backgroundColor: "blue", width: "90%", height: "90%"}}>
                <Box3></Box3>
            </div>
        )
    }
}

export class Box1 extends React.Component {
    render() {
        return (
            <div style={{margin: "auto", padding: "1rem", backgroundColor: "green", width: "600px", height: "500px"}}>
                <Box2></Box2>
            </div>
        )
    }
}