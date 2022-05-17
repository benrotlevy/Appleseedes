import React from "react";
import "./spinner.css";


const Spinner = () => {
    return <div className="spinner"></div>
}
const Spinner2 = () => {
    return <div className="spinner-2"></div>
}
const Spinner3 = () => {
    return <div className="spinner-3"></div>
}

export class SpinnerApp extends React.Component {

    state = {display: true}

    componentDidMount() {
        setTimeout(()=> {
            this.setState({display: false})
        }, 5000);
    }

    renderContent() {
        const num = Math.floor(Math.random() * 3 +1);
        console.log(num);
        switch (num) {
            case 1:
                return <Spinner/>
            case 2:
                return <Spinner2/>
            case 3:
                return <Spinner3/>
        }
    }

    render() {
        return <>{this.state.display? this.renderContent(): <></>}</>
    }
}

