import "./Clock.css";
import { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock">
            {time.toLocaleTimeString("en-GB")}
        </div>
    );
}

export default Clock;