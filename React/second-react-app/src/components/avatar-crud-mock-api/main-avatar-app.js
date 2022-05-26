import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Avatar } from "./avatar/Avatar";
import { CreateAvatar } from "./create/Create";
import { Header } from "./header/Header";
import { Home } from "./home/Home";

export const MainAvatarApp = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Route exact path={"/"}><Home/></Route>
                <Route exact path={"/avatar/:id"} component={Avatar}/>
                <Route exact path={"/create"} component={CreateAvatar}/> 
            </BrowserRouter>
        </>
    )
}