import React, { useEffect, useRef, useState } from "react";


export const Editing = () => {

    const [isEdit, setIsEdit] = useState(false);

    const inputRef = useRef();

    useEffect(()=> {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }) 

    return (
        <div>
            {isEdit && <input ref={inputRef} />}
            <button onClick={()=> setIsEdit(prev => !prev)} >{isEdit? "save": "edit"}</button>
        </div>
    )
}