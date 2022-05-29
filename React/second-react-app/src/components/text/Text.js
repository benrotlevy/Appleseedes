import React, { useState } from "react";


export const Text = ({text, length}) => {

    const [isExpand, setIsExpand] = useState(text.length < length);

    const onSpanClick = () => {
        setIsExpand(prev => !prev);
    }

    const showText = () => {
        if(isExpand) {
            return text;
        }
        return text.slice(0, length);
    }

    return (
        <div>
            <p>{showText()} <span onClick={onSpanClick} style={{color: "blue", cursor: "pointer"}}>{isExpand?"show less":"...show more"}</span></p>
        </div>
    )
}