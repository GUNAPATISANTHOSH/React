import { useState } from "react";

let Message = () => {
    let [msg, setMsg] = useState("Hello");

    let updateHandler = (value) => {
        setMsg(value);
    };

    return (
        <div>
            <h2>Messages</h2>
            <h2>Msg: {msg}</h2>

            <button onClick={updateHandler.bind(null, "GM")}>GM</button>
            <button onClick={updateHandler.bind(null, "GA")}>GA</button>
            <button onClick={updateHandler.bind(null, "GE")}>GE</button>
            <button onClick={updateHandler.bind(null, "GN")}>GN</button>
        </div>
    );
};

export default Message;