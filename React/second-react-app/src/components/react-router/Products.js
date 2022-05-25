import React from "react";
import { Link } from "react-router-dom";
import { data } from "./store";

export class Products extends React.Component {

    state = {products: []}

    componentDidMount() {
        this.setState({products: [...data]})
        console.log(this.props.location);
    }

    renderProducts = () => {
        return this.state.products.map(product => <Link key={product.id} to={`/product/${product.id}`} >{product.title}</Link>)
    }

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        )
    }
}