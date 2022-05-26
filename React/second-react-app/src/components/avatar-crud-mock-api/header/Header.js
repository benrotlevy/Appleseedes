import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to="/" ><button style={{margin: "2rem"}}>HOME</button></Link>
            <Link to="/create" ><button>CREATE AVATAR</button></Link>
        </header>
    )
}