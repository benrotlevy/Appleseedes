import React from "react";
import { avatars } from "../api";

export class Avatar extends React.Component {

    state = {avatar: this.props.location.avatar, nameInput: ""}

    async componentDidMount() {
        if(!this.state.avatar) {
            try {
                const {data} = await avatars.get(`/${this.props.match.params.id}`);
                this.setState({avatar : {...data}});
            } catch (error) {
                console.log(error);
            }
            
        }
    }

    update = async () => {
        try {
            const newAvatar = {...this.state.avatar, name: this.state.nameInput}
            const {data} = await avatars.put(`/${this.props.match.params.id}`, newAvatar);
            this.setState({avatar : {...data}, nameInput: ""});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <main style={{display: "flex", gap: "5rem"}}>
                {this.state.avatar && 
                    <><div>
                        <h1>{this.state.avatar.name}</h1>
                        <h2>{this.state.avatar.gender}</h2>
                        <h2>{this.state.avatar.phone}</h2>
                        <h2>{this.state.avatar.country}</h2>
                        <img src={this.state.avatar.avatar} />
                        <p>{this.state.avatar.createdAt}</p>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input placeholder="Update Name" value={this.state.nameInput} onChange={({target})=>this.setState({nameInput: target.value})}/>
                        <button onClick={this.update} >Update</button>
                    </div></>  
                }
            </main>
        )
    }
}