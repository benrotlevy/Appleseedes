import React from "react";
import { Link } from "react-router-dom";
import { data } from "./store";

export const ProductDetail = (props) => {

    const product = data.find(product => {
        return product.id.toString() === props.match.params.id;
    })
    
    return (
        <div>
            <h2>{product.title}</h2>
            <h3>Price: {product.price}</h3>
            <img alt={product.title} src={product.imageUrl} />
            <button><Link to="/products" >Back</Link></button>
        </div>
    )
}