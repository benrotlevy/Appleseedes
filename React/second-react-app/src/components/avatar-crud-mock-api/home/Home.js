import React from "react";
import { Link } from "react-router-dom";
import { avatars } from "../api";

export class Home extends React.Component {

    state = {avatars: []};

    async componentDidMount() {
        try {
            const {data} = await avatars.get("/");
            this.setState({avatars: [...data]});
        } catch(error) {
            console.log(error);
        }
    }

    delete = async (id) => {
        try {
            const {data} = await avatars.delete(`/${id}`);
            const newAvatars = this.state.avatars.filter(avatar => avatar.id !== data.id);
            this.setState({avatars: newAvatars});
        } catch(error) {
            console.log(error);
        }
    }

    insertAvatars = () => {
        return this.state.avatars.map(avatar => {
            return (
                <div key={avatar.id}><Link to={{pathname:`/avatar/${avatar.id}`, avatar: avatar}}>
                    <div>
                        <h3>{avatar.name}</h3> 
                        <img src={avatar.avatar}/> 
                    </div>
                </Link>
                <button onClick={()=> this.delete(avatar.id)}>Delete</button></div>
            )
        })
    }

    render() {
        return (
            <div style={{display: "flex", flexWrap: "wrap", gap: "3rem"}}>
                {this.insertAvatars()}
            </div>
        )
    }
}