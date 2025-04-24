import "./Terminal.css";
import { useState } from "react";

function Terminal() {
    const [visible, setVisible] = useState(false);
    const [command, setCommand] = useState("");

    const handleCommandSubmit = (e) => {
        e.preventDefault();
        console.log("Comando ingresado:", command);
        setCommand("");
    };

    return (
        <div className="terminal" onClick={() => setVisible(true)}>
            <p>Terminal</p>

            {visible && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Terminal</h2>
                        <form onSubmit={handleCommandSubmit}>
                            <input
                                type="text"
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                placeholder="Escribe un comando..."
                                className="command-input"
                            />
                            <button type="submit">Ejecutar</button>
                        </form>
                        <button className="close-button" onClick={() => setVisible(false)}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Terminal;