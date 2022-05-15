import React from "react";
import  ReactDOM  from "react-dom";
import {HelloWorld2} from "./components/hello_world-2";
import { Box1 } from "./components/boxes";
import { Quiz } from "./components/quiz";

const App = function () {
    return (
        <div>
            {/* <HelloWorld2 /> */}
            {/* <Box1></Box1> */}
            <Quiz></Quiz>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);