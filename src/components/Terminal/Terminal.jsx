import "./Terminal.css";
import { useState, useEffect } from "react";

function Terminal() {
    const [visible, setVisible] = useState(false);
    const [command, setCommand] = useState("");
    const [history, setHistory] = useState([]);

    const handleCommandSubmit = (e) => {
        e.preventDefault();
        if (command.trim()) {
            setHistory((prevHistory) => {
                const newHistory = [...prevHistory, command];
                if (newHistory.length > 10) {
                    newHistory.shift();
                }
                return newHistory;
            });
        }
        setCommand("");
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && visible) {
                setVisible(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [visible]);

    return (
        <div className="terminal" onClick={() => setVisible(true)}>
            <p className="terminal-title">Terminal</p>

            {visible && (
                <div className="modal" onClick={() => setVisible(false)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-button" onClick={() => setVisible(false)}>
                            Cerrar
                        </button>

                        <div className="history">
                            {history.map((cmd, index) => (
                                <p key={index} className="command">
                                    {`${cmd}`}
                                </p>
                            ))}
                        </div>

                        <form onSubmit={handleCommandSubmit}>
                            <input
                                type="text"
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                placeholder="Escribe un comando..."
                                className="command-input"
                            />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Terminal;