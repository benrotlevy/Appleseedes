import React from "react";
import { avatars } from "../api";
import { Avatar } from "../avatar/Avatar";

export class CreateAvatar extends React.Component {

    state = {name: "", gender: "", phone: "", country: "", avatar: "", createdAt: ""}

    onInputChange = (target) => {
        this.setState({[target.name]: target.value});
    }

    create = async() => {
        if(this.allInputsFull) {
            try {
                const newAvatar = {...this.state};
                const {data} = await avatars.post("/", newAvatar);
                this.props.history.push(`/avatar/${data.id}`);
            } catch(error) {
                console.log(error);
            }
        }
    }

    allInputsFull = () => {
        for(let key in this.state) {
            if(!this.state[key]) {
                return false;
            }
        }
        return true;
    }

    render() {
        return (
            <>
                {<div style={{display: "flex", flexDirection: "column", gap: "3rem"}}>
                    <input name="name" placeholder="name" value={this.state.name} onChange={({target})=>this.onInputChange(target)} />
                    <input name="gender" placeholder="gender" value={this.state.gender} onChange={({target})=>this.onInputChange(target)} />
                    <input name="phone" placeholder="phone" value={this.state.phone} onChange={({target})=>this.onInputChange(target)} />
                    <input name="country" placeholder="country" value={this.state.country} onChange={({target})=>this.onInputChange(target)} />
                    <input name="avatar" placeholder="avatar" value={this.state.avatar} onChange={({target})=>this.onInputChange(target)} />
                    <input name="createdAt" placeholder="createdAt" value={this.state.createdAt} onChange={({target})=>this.onInputChange(target)} />
                    <button onClick={this.create}>Create</button>
                </div>}
            </>
        )
    }
}