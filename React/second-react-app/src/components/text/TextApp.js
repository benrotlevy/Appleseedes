import React from "react";
import { Text } from "./Text";


export const TextApp = () => {
    return <Text text="Create a component that takes 2 props. A text as a string
    and a maximum length as an integer.
    If the text is longer that the maximum length hide the
    remaining text.
    You are able to read the rest of the text by clicking on read
    more and you are able to hide the text by clicking on show
    less.
    Use the useState hook to control when it is hidden." length={50}/>
}