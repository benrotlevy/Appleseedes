import React from "react";
import { data } from "./data";

function extractNames(data) {
    return data.map(e => e.name);
}

function filterByDate(data) {
    return data.filter(e => e.birthday.split("-")[2] > "1989");
}

export class DataMassaging extends React.Component {

    state = {names: extractNames(data), peoples: filterByDate(data)}

    render() {
        return (
            <>
                <Name names= {this.state.names} />
                <Card peoples= {this.state.peoples} />
            </>
        );
    }
}

const Name = (props) => {
    return (
        <>
            {props.names.map(name => <h1 key={name}>{name}</h1>)}
        </>
    )
}

const Card = (props) => {
    return (
        <>
            {props.peoples.map(person => <h1 key={person.name}>{person.name}, {person.birthday}, {person.favoriteFoods.meats.join(", ")}, {person.favoriteFoods.fish.join(", ")}</h1>)}
        </>
    )
}