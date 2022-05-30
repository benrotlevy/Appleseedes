import axios from "axios";
import React, { useEffect, useState } from "react";

export const CountriesAPI = () => {
    
    const [list, setList] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(()=> {
        const getData = async() => {
            const {data} = await axios.get("https://restcountries.com/v3.1/all");
            setList(data);
            setFilterList(data);
        }
        getData();
    }, []);

    useEffect(()=> {
        const filter = list.filter(country => country.name.common.toLowerCase().includes(term));
        setFilterList(filter);
    }, [term]);

    const insertList = filterList.map(country => {
        return <li key={country.cca2}>{country.name.common}</li>
    })

    return (
        <div>
            Search
            <input value={term} onChange={(e)=> setTerm(e.target.value)} />
            {insertList}
        </div>
    )
}