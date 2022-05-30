import axios from "axios";
import React, { useEffect, useState } from "react";

export const AlgoliaAPI = () => {
    const [term, setTerm] = useState("");
    const [searched, setSearched] = useState("hooks");
    const [list, setList] = useState([]);
    const [isSpinning, setIsSpinning] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(()=> {

        const getData = async () => {
            try {
                !isSpinning && setIsSpinning(true);
                isError && setIsError(false);
                const {data} = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searched}`);
                setList(data.hits);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
            setIsSpinning(false);
        }

        if(searched) {
            getData();
        }
    }, [searched]);

    const insertList = () => {
        if(!isError) {
            return list.map(res => {
                return <li key={res.objectID}> <a href={res.url} >{res.title}</a> </li>;
            })
        }
        return <div><h1>404</h1></div>
    } 

    return (
        <div>
            <input value={term} onChange={(e)=> setTerm(e.target.value)}/>
            <button onClick={()=> setSearched(term)}>Search</button>
            {isSpinning? <div>loading...</div>: insertList()}
        </div>
    )
}