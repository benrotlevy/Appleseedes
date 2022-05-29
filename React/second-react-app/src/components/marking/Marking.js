import React, { useState } from "react";

const originalData = ["one", "two", "three", "four", "five"].map(el => {return{name: el, checked: false}});

export const Marking = () => {

    const [arr, setArr] = useState(originalData);

    const insertCheckBox = () => {
        return arr.map(el => {
            return <li key={el.name}><input onChange={handleInputChange} type="checkbox" id={el.name} checked={el.checked}/> {el.name}</li>
        })
    }

    const handleInputChange = ({target}) => {
        const newArr = arr.map(el => {
            if(el.name === target.id) {
                return {name: el.name, checked: !el.checked};
            }
            return el;
        })
        setArr(newArr);
    }

    const deleteItems = () => {
        const newArr = arr.filter(el => !el.checked);
        setArr(newArr);
    }

    const resetItems = () => {
        setArr(originalData);
    }

    return (
        <div>
            <button onClick={deleteItems} >Delete</button>
            <button onClick={resetItems}>Reset</button>
            {insertCheckBox()}
        </div>
    )

}