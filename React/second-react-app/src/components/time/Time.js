import React, { useState } from "react";

export const Time = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const onInputChange = ({target}) => {
        const val = parseFloat(target.value);
        switch (target.id) {
            case "seconds":
                if(target.value === "") {
                    setSeconds(() => target.value);
                } else {
                    setSeconds(val);
                    setMinutes(val/60);
                    setHours(val/60/60);
                }
                break;
            case "minutes":
                if(target.value === "") {
                    setMinutes(() => target.value);
                } else {
                    setMinutes(val);
                    setSeconds(val*60);
                    setHours(val/60);
                }
                break;
            case "hours":
                if(target.value === "") {
                    setHours(() => target.value);
                } else {
                    setHours(val);
                    setMinutes(val*60);
                    setSeconds(val*60*60);
                }
                break;
        }
    }

    return (
        <div>
            <form style={{display: "flex", flexDirection: "column", width: "10rem"}}>
                <label htmlFor="seconds">
                    Seconds
                </label>
                <input id="seconds" onChange={onInputChange} value= {seconds} />
                <label htmlFor="minutes">
                    Minutes
                </label>
                <input id="minutes" onChange={onInputChange} value= {minutes}/>
                <label htmlFor="hours">
                    Hours
                </label>
                <input id="hours" onChange={onInputChange} value= {hours}/>
            </form>
        </div>
    )
} 