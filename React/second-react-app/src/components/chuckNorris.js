import React from "react";
import axios from "axios";

export class ChackNorrisJokes extends React.Component {

    state = {random: "", categories: [], randomByCategory: "", inputValue: "", randomBySearch: []}

    componentDidMount = async () => {
        const data = await axios.get("https://api.chucknorris.io/jokes/categories");
        this.setState({categories: [...data.data]})
    }

    onClick = async (event) => {
        const data = await axios.get("https://api.chucknorris.io/jokes/random");
        this.setState({random: data.data.value});
    }

    onClickCategory = async (event) => {
        // console.log(event.target);
        const data = await axios.get(`https://api.chucknorris.io/jokes/random?category=${event.target.innerText}`);
        this.setState({randomByCategory: data.data.value})
    }

    renderCategories = () => {
        const arr = this.state.categories.map(category => <button key={category} onClick={this.onClickCategory}>{category}</button>);
        return arr;
    }

    renderSearch = () => {
        const arr = this.state.randomBySearch.map(e => <div key={e} >{e}</div>);
        return arr;
    }

    onChange = async (event) => {
        this.setState({inputValue: event.target.value});
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const term = this.state.inputValue;
        if(term.length >= 3) {
            const data = await axios.get(`https://api.chucknorris.io/jokes/search?query=${term}`);
            const arr = data.data.result.map(joke => joke.value);
            this.setState({inputValue: term, randomBySearch: arr});
        }
    }

    render() {
        return (
            <>
                <button onClick={this.onClick}>random</button>
                {this.state.random}
                <div>
                    {this.renderCategories()}
                </div>
                <div>
                    {this.state.randomByCategory}
                </div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" onChange={this.onChange} value= {this.state.inputValue} />
                    </form>
                </div>
                <div>
                    {this.renderSearch()}
                </div>
            </>
        )
    }
}