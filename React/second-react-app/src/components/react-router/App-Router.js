import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Homepage } from './Hompage';
import { Products } from './Products';
import { Header } from './Header';
import { ProductDetail } from "./ProductDetail";
import { Error404 } from "./Error";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/productss" component={Products}/>
                <Route exact path="/product/:id" component={ProductDetail}/>
                <Route component={Error404}/>
            </Switch>
        </BrowserRouter>
    )
}