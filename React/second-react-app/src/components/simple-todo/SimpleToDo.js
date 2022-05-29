import React, { useState } from "react";

const data = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
]


export const SimpleToDo = () => {

    const [toDo, setToDo] = useState(data);

    const onIconClick = ({target}) => {
        const index = findIndexByName(target.getAttribute("data-id"));
        const copy = [...toDo];
        copy[index].completed = !toDo[index].completed;
        setToDo([...copy]);
    }

    const findIndexByName = (name) => {
        let index = -1;
        toDo.forEach((el, i) => {
            if(el.name === name) {
                index = i;
            }
        })
        return index;
    }

    const insertList = () => {
        return toDo.map(el => {
            return <h1 key={el.name}>{el.completed? <s>{el.name} </s>: <>{el.name}</>}<span data-id={el.name} onClick={onIconClick}>{el.completed? String.fromCharCode(10003):String.fromCharCode(10007)}</span></h1>
        })
    }

    return (
        <div>
            {insertList()}
        </div>
    )
}