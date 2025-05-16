import "./Current.css";
import { useState } from "react";

function Current() {
    const [state, setState] = useState(["Playing CS2", "Playing Balder's Gate 3", "Playing League of Legends"]);

    return (
        <div className="current">
            <p>
                Estado: <br />
                <b>{state[Math.floor(Math.random() * state.length)]}</b>
            </p>
        </div>
    );
}

export default Current;