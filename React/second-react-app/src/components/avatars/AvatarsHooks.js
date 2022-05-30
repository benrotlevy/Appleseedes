import React, { useEffect, useState } from "react";
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


export const AvatarsHooks = () => {

    const [avatars, setAvatars] = useState([]);
    const [filteredAvatars, setFilteredAvatars] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(()=> {
        const getData = async () => {
            try {
                const persons = await axios.get("https://randomuser.me/api/?results=100");
                console.log(persons.data.results);
                setAvatars([...persons.data.results]);
                setFilteredAvatars([...persons.data.results]);
            } catch(error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onButtonClick = (event) => {
        setFilteredAvatars(filterAvatarsByName(avatars, inputValue));
    }

    const filterAvatarsByName = (avatars, term) => {
        return avatars.filter(avatar => avatar.name.first.toLowerCase().includes(term.toLowerCase()) || avatar.name.last.toLowerCase().includes(term.toLowerCase()));
    }

   
    return (
        <>
            <header>
                <Input type= "text" onChange= {onInputChange} value= {inputValue} />
                <Button onClick= {onButtonClick} title= "Filter" />
            </header>
            {avatars[0] && <MapAvatars dataToMap={filteredAvatars} />}
        </>
    )
}