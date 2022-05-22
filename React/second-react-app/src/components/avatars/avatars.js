import React from "react";
import axios from "axios";
import "./avatars.css";

const Input = (props) => {
    return (
        <input type={props.type} onChange={props.onChange} value={props.value} />
    )
}

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.title}</button>
    )
}

const MapAvatars = (props) => {

    const mapData = (data) => {
        return data.map(person => <Avatar key={person.name.first + person.name.last + person.location.street.number + person.id.name + person.id.value} person= {person} />)
    }

    return <div className="avatars-container">{mapData(props.dataToMap)}</div>
}

const Avatar = (props) => {
    return (
        <div>
            <h1>{props.person.name.first} {props.person.name.last}</h1>
            <img src= {props.person.picture.large} />
        </div>
    )
}

export class Avatars extends React.Component {

    state = {avatars: [], filteredAvatars: [], inputValue: ""}

    componentDidMount = async () => {
        try {
            const persons = await axios.get("https://randomuser.me/api/?results=5000");
            console.log(persons.data.results);
            this.setState({avatars: [...persons.data.results], filteredAvatars: [...persons.data.results]});
        } catch(error) {
            console.log(error);
        }
    }

    onInputChange = (event) => {
        this.setState({inputValue: event.target.value});
    }

    onButtonClick = (event) => {
        this.setState({filteredAvatars: this.filterAvatarsByName(this.state.avatars, this.state.inputValue)})
    }

    filterAvatarsByName = (avatars, term) => {
        return avatars.filter(avatar => avatar.name.first.toLowerCase().includes(term.toLowerCase()) || avatar.name.last.toLowerCase().includes(term.toLowerCase()));
    }

    render() {
        return (
            <>
                <header>
                    <Input type= "text" onChange= {this.onInputChange} value= {this.state.inputValue} />
                    <Button onClick= {this.onButtonClick} title= "Filter" />
                </header>
                {this.state.avatars[0] && <MapAvatars dataToMap={this.state.filteredAvatars} />}
            </>
        )
    }
}