import React from "react";
import  ReactDOM  from "react-dom";
import {HelloWorld2} from "./components/hello_world-2";
import { Box1 } from "./components/boxes";
import { Quiz } from "./components/quiz";
import { Button } from "./components/buttons";
import { Card } from "./components/cards";
import {Increment} from "./components/increment"
import { HideAndSeek } from "./components/hide_and_seec";
import { IncrementDecrement } from "./components/increment_decrement";
import { LifeCycle } from "./components/life_cycle_methods";
import { BoxAnimation } from "./components/box_animation";
import { ChangingBox } from "./components/changing_box";
import { SpinnerApp } from "./components/spinner/spinner";

const App = function () {
    return (
        <div>
            {/* <HelloWorld2 /> */}
            {/* <Box1></Box1> */}
            {/* <Quiz/> */}
            {/* <Button content = "important" fontWeight = "bold"/> */}
            {/* <Button content = "not important"/> */}
            {/* <Card 
                img = "https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377__480.jpg"
                title = "first title"
                p = "eirpotgtoqaegwtruihiowtphtiowhwoithiwothiotwrkngwrtgt"
                link1 = "https://github.com/benrotlevy/Appleseedes"
                link2 = "https://mdl.appleseeds.org.il/course/view.php?id=293"
                link1Content = "github"
                link2Content = "moodle"
            />
            <Card 
                img = "https://cdn.pixabay.com/photo/2022/05/12/19/11/flowers-7192179__340.jpg"
                title = "second title"
                p = "eirpotgtoqaegwtruihiowtphtiowhwoithiwothiotwrkngwrtgt"
                link1 = "https://github.com/benrotlevy/Appleseedes"
                link2 = "https://mdl.appleseeds.org.il/course/view.php?id=293"
                link1Content = "github 36365"
                link2Content = "moodle 43663"
            />
            <Card 
                img = "https://cdn.pixabay.com/photo/2019/08/12/10/03/tourist-4400871__340.jpg"
                title = "third title"
                p = "fgbwrthhj6j64"
                link1 = "https://github.com/benrotlevy/Appleseedes"
                link2 = "https://mdl.appleseeds.org.il/course/view.php?id=293"
                link1Content = "github 3"
                link2Content = "moodle 5"
            /> */}
            {/* <Increment></Increment> */}
            {/* <HideAndSeek></HideAndSeek> */}
            {/* <IncrementDecrement/> */}
            {/* <LifeCycle></LifeCycle> */}
            {/* <BoxAnimation /> */}
            {/* <ChangingBox/> */}
            <SpinnerApp/>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);